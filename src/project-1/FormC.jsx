import React, { useState } from "react";
import { styles } from "./aStyles";
import shortid from "shortid";

function FormC({
  setToggle,
  setGetUserOutput,
  getUserOutput,
  toggle,
  state,
  setState,
}) {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);
  const handler = (e) => {
    setGetUserOutput({ ...getUserOutput, [e.target.name]: e.target.value });
  };

  const showCountDown = () => {
    if (getUserOutput.text) {
      setToggle((prev) => !prev);
    } else {
      return;
    }

    const current = new Date().getTime();
    setState([
      ...state,
      {
        id: shortid.generate(),
        Dikr: getUserOutput.text,
        Repetition: getUserOutput.number,
        Duration: current,
      },
    ]);
  };

  return (
    <div className={`${styles.centerEl}`}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`sm:w-2/3 w-[100%] mx-auto bg-slate-800 text-gray-900 grid content-center p-5 gap-3 ${styles.rounded}`}
      >
        <div className="grid grid-cols-3 gap-2">
          <input
            required
            type="text"
            name="text"
            onChange={handler}
            value={getUserOutput.text}
            placeholder="enter a text..."
            className={`h-10 xs:col-span-2 col-span-full py-2 px-3 ${styles.rounded}`}
          />
          <input
            required
            type="number"
            name="number"
            onChange={handler}
            value={getUserOutput.number}
            placeholder="enter a number..."
            min="0"
            className={`h-10 xs:col-auto col-span-full py-2 px-3 ${styles.rounded}`}
          />
          <button
            disabled={toggle}
            className={`hover:bg-sky-950 bg-sky-900 py-2 mt-3 col-span-full ${styles.rounded} font-bold text-white`}
            onClick={showCountDown}
          >
            Start
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormC;
