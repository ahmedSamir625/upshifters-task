import { ERROR_MESSAGE } from "../constants";
import data from "./data.json";

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
      reject({ message: ERROR_MESSAGE });
    }, 1000);
  });
};

export default getData;
