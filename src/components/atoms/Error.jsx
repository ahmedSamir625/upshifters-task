import React from "react";
import { PiWarningLight } from "react-icons/Pi";
import { VscRefresh } from "react-icons/vsc";

const Error = ({ msg, onRefreshClick }) => {
  return (
    <div className="flex flex-col justify-center items-center flex-grow">
      <PiWarningLight size={60} className="text-red-500" />
      <p className="mt-3 mb-4">{msg}</p>
      <button  onClick={onRefreshClick}>
        <VscRefresh size={30} className="text-gray-500"/>
      </button>
    </div>
  );
};

export default Error;
