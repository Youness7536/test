import React, { useState } from "react";
import { styles } from "./exps";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdSave } from "react-icons/md";

function HistoryFields({ todo, handler }) {
  const [isEdited, setIsEdited] = useState(true);
  return (
    <div
      className={`flex justify-between bg-[#FFD95A] shadow-sm p-2 my-3 items-center ${styles.round}`}
    >
      <aside className="flex flex-col w-full pr-4">
        <input
          type="text"
          readOnly={isEdited}
          defaultValue={todo.text}
          className={`${styles.round} ${
            isEdited ? "text-primary" : "text-[#D2001A]"
          } w-full outline-none px-2 py-1`}
        />

        {/* <textarea
          className={`outline-none text-black w-full px-1 ${styles.round}`}
          readOnly={true}
          // cols="30"
          rows="4"
          defaultValue={todo.text}
        ></textarea> */}

        <span className="text-xs text-green-900 font-semibold pl-2 mt-[0.15rem] tracking-wider">
          Created: {todo.date} <br />
          <span className="ml-8">{todo.time}</span>
        </span>
      </aside>

      <aside className="border-l border-l-gray-500 pl-2 flex flex-col gap-2">
        <button
          name="edit"
          onClick={(e) => {
            if (e.target.name === "edit") {
              setIsEdited(false);
              e.target.name = "save";
            } else {
              e.target.name = "edit";
              setIsEdited(true);
            }
          }}
        >
          {isEdited ? (
            <MdEdit size="25" className={`${styles.round} bg-[#FCFDF2]`} />
          ) : (
            <MdSave size="25" />
          )}
        </button>
        <button onClick={() => handler(todo.id)}>
          <MdDelete
            size="25"
            className={`${styles.round} bg-[#D2001A] text-white`}
          />
        </button>
      </aside>
    </div>
  );
}

export default HistoryFields;
