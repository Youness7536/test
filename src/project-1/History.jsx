import React from "react";
import { styles } from "./aStyles";
import { Link } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";

function History({ state, setState }) {
  return (
    <div className={`${styles.centerEl}`}>
      <Link to="/" className="w-fit">
        <IconButton>
          <i className="fas fa-heart" />
        </IconButton>
      </Link>

      <section className="mt-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  The dikr
                </th>
                <th scope="col" className="px-6 py-3">
                  repetition
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {state.length > 0 ? (
                state.map((el, i) => (
                  <tr
                    className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
                    key={i}
                  >
                    <td className="px-6 py-4">{el.Dikr}</td>
                    <td className="px-6 py-4">{el.Repetition}</td>
                    <td className="px-6 py-4">
                      <Stack direction="row" spacing={10}>
                        <IconButton
                          color="primary"
                          aria-label="delete"
                          onClick={() => {
                            setState(state.filter((ell) => ell.id !== el.id));
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <td
                    className="px-6 py-4 text-center text-slate-500 select-none text-base"
                    colSpan="55"
                  >
                    Empty
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default History;
