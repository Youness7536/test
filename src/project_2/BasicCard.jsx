import * as React from "react";

import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import NotesRoundedIcon from "@mui/icons-material/NotesRounded";

export default function BasicCard({ state }) {
  return (
    <Stack spacing={1} direction="row" sx={{ color: "action.active" }}>
      <Badge color="primary" badgeContent={state.length} showZero>
        <NotesRoundedIcon className="text-white" />
      </Badge>
    </Stack>
  );
}
