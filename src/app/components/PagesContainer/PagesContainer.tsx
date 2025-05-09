import { gridItems } from "@/app/data/gridItems";
import "./pages.css";
import PageItem from "../PageItem/PageItem";
import { ACTIONS } from "../MainGrid/MainGrid";
import { Dispatch } from "react";

type PagesContainerProps = {
  itemActive: number;
  dispatch: Dispatch<{ type: string; payload: string | number }>;
};

const PagesContainer = ({ itemActive, dispatch }: PagesContainerProps) => {
  return (
    <div className="page-container">
      <div className="pages-navigation">
        <div
          role="button"
          tabIndex={0}
          className="pages-decrease pages-navigate"
          onClick={() => {
            if (itemActive === 0) {
              dispatch({ type: ACTIONS.CLICK_GRID, payload: 8 });
            } else {
              dispatch({
                type: ACTIONS.CLICK_GRID,
                payload: itemActive - 1,
              });
              console.log("click");
            }
          }}
        >
          <svg
            className="text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </div>
        <div
          role="button"
          tabIndex={0}
          className="pages-increase pages-navigate"
          onClick={() => {
            if (itemActive === 8) {
              dispatch({ type: ACTIONS.CLICK_GRID, payload: 0 });
            } else {
              dispatch({
                type: ACTIONS.CLICK_GRID,
                payload: itemActive + 1,
              });
              console.log("click");
            }
          }}
        >
          <svg
            className="text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </div>
      </div>
      {gridItems.map((item) => (
        <PageItem
          key={item.id}
          id={item.id}
          itemActive={itemActive}
          item={item}
        />
      ))}
    </div>
  );
};

export default PagesContainer;
