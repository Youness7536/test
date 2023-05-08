// import { Navbar } from "@material-tailwind/react";
// import React, { useEffect, useState } from "react";
// import { CountDown, Form, Navbar, History } from "./project-1/exports";
// import { Route, Routes } from "react-router-dom";
// import NavbarC  from "../src/project-1/NavbarC";
// import Form from "../src/project-1/Form";
// import CountDown from "../src/project-1/CountDown";
// import History from "../src/project-1/History";

// function App() {
//   const [toggle, setToggle] = useState(false);
//   const [getUserOutput, setGetUserOutput] = useState({ text: "", number: "" });
//   const [state, setState] = useState([]);

//   useEffect(() => {
//     if (getUserOutput.number === 0) {
//       alert("Mabrouuk");
//       setGetUserOutput({ text: "", number: "" });
//       setToggle((prev) => false);
//     }
//   }, [getUserOutput.number]);
//   return (
//     <div className="max-w-5xl font-[Poppins] mx-auto text-white">
//       <NavbarC state={state} />
//       <div className="w-full h-screen px-4">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Form
//                 setToggle={setToggle}
//                 toggle={toggle}
//                 getUserOutput={getUserOutput}
//                 setGetUserOutput={setGetUserOutput}
//                 state={state}
//                 setState={setState}
//               />
//             }
//           />
//           <Route
//             path="/notes"
//             element={<History state={state} setState={setState} />}
//           />
//         </Routes>
//         {toggle && (
//           <CountDown
//             userOutput={getUserOutput}
//             setGetUserOutput={setGetUserOutput}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import FormC from "./project-1/FormC";

// function App() {
//   const [toggle, setToggle] = useState(false);
//   const [getUserOutput, setGetUserOutput] = useState({ text: "", number: "" });
//   const [state, setState] = useState([]);
//   return (
//     <div>
//       <FormC
//         toggle={toggle}
//         setToggle={setToggle}
//         getUserOutput={getUserOutput}
//         state={state}
//         setState={setState}
//       />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Fields from "./project_2/Fields";
import Navigation from "./project_2/Navigation";
import History from "./project_2/History";
import { styles } from "./project_2/exps";

function App() {
  const [showHistory, setShowHistory] = useState(true);
  const [state, setState] = useState([]);

  return (
    <div className={`${styles.padding} max-w-6xl mx-auto text-white`}>
      <Navigation
        setShowHistory={setShowHistory}
        showHistory={showHistory}
        state={state}
      />
      <div className="grid grid-cols-3">
        <Fields showHistory={showHistory} setState={setState} state={state} />
        <History showHistory={showHistory} state={state} setState={setState} />
      </div>
    </div>
  );
}

export default App;
