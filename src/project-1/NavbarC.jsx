import React from "react";
import { Link } from "react-router-dom";
import { Badge, Button } from "@material-tailwind/react";

function NavbarC({ state }) {
  return (
    <div className="bg-slate-600 w-full px-4 fixed left-0 top-0">
      <header className="h-14 flex justify-end items-center max-w-5xl mx-auto">
        <div>
          <Link to="/notes">
            <Badge content={state.length}>
              <Button>Notifications</Button>
            </Badge>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default NavbarC;
