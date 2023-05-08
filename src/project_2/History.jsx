import React from "react";
import HistoryFields from "./HistoryFields";
import { styles } from "./exps";

function History({ showHistory, setState, state }) {
  const handler = (todo) => {
    setState(state.filter((t) => t.id !== todo));
  };

  return (
    <div
      className={`sm:pt-16 pt-14 sm:pb-3 sm:pr-3 h-full text-primary col-span-1 absolute  ${
        showHistory ? "top-[-100%]" : "top-0 ss:w-7/12 duration-150"
      } w-11/12 sm:w-full right-0 sm:static`}
    >
      <div className={`${styles.round} bg-[#F7EFE5] shadow-md h-full p-3`}>
        <h1 className="text-center mb-6 text-2xl font-medium tracking-wider">
          Your todos <br /> <hr className="mt-2" />
        </h1>
        {state.length > 0 ? (
          state.map((todo) => (
            <HistoryFields handler={handler} todo={todo} key={todo.id} />
          ))
        ) : (
          <div className="text-center text-gray-400 text-lg">
            No todos today.
          </div>
        )}
      </div>
    </div>
  );
}

export default History;
