import React from "react";
import { styles } from "./exps";
import { CgNotes } from "react-icons/cg";
import BasicCard from "./BasicCard";

const Navigation = ({ setShowHistory, state }) => {
  const historyHandler = () => {
    setShowHistory((prev) => !prev);
  };

  return (
    <div className="bg-[#C07F00] fixed shadow-sm left-0 w-full z-50">
      <header
        className={`max-w-6xl h-14 flex justify-end mx-auto items-center ${styles.padding}`}
      >
        <h1 className="text-center flex-1 text-xl">Simple todo app</h1>
        <div
          onClick={historyHandler}
          className="cursor-pointer sm:hidden block px-3"
        >
          {/* <button
            className="cursor-pointer text-center sm:hidden block"
            onClick={historyHandler}
          >
            <CgNotes size="20" />
          </button> */}
          <BasicCard state={state} />
        </div>
      </header>
    </div>
  );
};

export default Navigation;
