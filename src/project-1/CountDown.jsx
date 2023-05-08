import React, { useEffect } from "react";
import { styles } from "./aStyles";

function CountDown({ userOutput, setGetUserOutput }) {
  const decrement = () => {
    setGetUserOutput({ ...userOutput, number: userOutput.number - 1 });
  };
  return (
    <nav className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.7)] grid content-center px-2">
      <div
        className={`sm:w-2/3 w-[97%] mx-auto bg-slate-800 px-4 grid grid-cols-1 gap-2 py-6 ${styles.rounded}`}
      >
        <div
          className={`col-span-1 bg-slate-600 py-3 px-2 shadow-md mb-5 text-center text-lg ${styles.rounded}`}
        >
          {userOutput.text}
        </div>

        <div className="col-span-1 w-5/6 mx-auto flex justify-between gap-3">
          <div
            className={`flex items-center justify-center ${styles.buttonCountDown} ${styles.rounded}`}
          >
            {userOutput.number >= 0 ? userOutput.number : 0}
          </div>
          <button
            className={`${styles.buttonCountDown} ${styles.rounded}`}
            onClick={userOutput.number > 0 ? decrement : null}
          >
            -
          </button>
        </div>
      </div>
    </nav>
  );
}

export default CountDown;
