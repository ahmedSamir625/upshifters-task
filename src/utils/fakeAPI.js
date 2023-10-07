import { ERROR_MESSAGE } from "../constants";
import data from "./data.json";
import _ from "lodash";

export const getData = (page, limit) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: 200,
        messages: _.slice(data.messages, (page - 1) * limit, page * limit),
        pages: Math.ceil(data.messages.length / limit),
      });
      resolve(data);
      reject({ message: ERROR_MESSAGE });
    }, 1000);
  });
};

export const searchMessages = (text, option) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (option === "users") {
        resolve({
          status: 200,
          messages: _.filter(data.messages, (msg) =>
            _.includes(_.toLower(msg.user_name), _.toLower(text))
          ),
        });
      } else if (option === "messages") {
        resolve({
          status: 200,
          messages: _.filter(data.messages, (msg) =>
            _.includes(_.toLower(msg.message), _.toLower(text))
          ),
        });
      } else {
        resolve({
          status: 200,
          messages: _.unionBy(
            _.filter(data.messages, (msg) => _.includes(_.toLower(msg.user_name), _.toLower(text))),
            _.filter(data.messages, (msg) => _.includes(_.toLower(msg.message), _.toLower(text))),
            "id"
          ),
        });
      }
      reject({ message: ERROR_MESSAGE });
    }, 1000);
  });
};
