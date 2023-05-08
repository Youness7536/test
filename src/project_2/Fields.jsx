import { useState } from "react";
import { styles } from "./exps";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { orange } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  // color: theme.palette.getContrastText(orange[50]),
  backgroundColor: orange[500],
  "&:hover": {
    backgroundColor: orange[700],
  },
}));

function Fields({ setState, state }) {
  const [text, setText] = useState("");
  return (
    <div
      className={`w-full h-screen grid content-center col-span-3 sm:col-span-2 ${styles.padding}`}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto xs:w-2/3 w-11/12 grid grid-cols-4 sm:w-3/4"
      >
        <input
          type="text"
          required
          value={text}
          placeholder="What do need to do today?"
          onChange={(e) => setText(e.target.value)}
          className={`w-full col-span-3 text-primary shadow-md px-3 py-1 ${styles.round}`}
        />
        {/* <div className=""> */}
        <Stack spacing={2} direction="row">
          <ColorButton
            variant="contained"
            onClick={() => {
              if (text.length > 0) {
                setState([
                  {
                    id: Math.random(),
                    text,
                    time: new Date().toLocaleTimeString(),
                    date: new Date().toLocaleDateString(),
                    completed: false,
                  },
                  ...state,
                ]);
                setText("");
              }
            }}
          >
            Add
          </ColorButton>
        </Stack>
        {/* </div> */}
      </form>
    </div>
  );
}

export default Fields;
