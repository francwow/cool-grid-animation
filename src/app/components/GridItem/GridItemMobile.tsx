import { Dispatch } from "react";
import SlideShow from "../slideShow/SlideShow";
import "./grid-item.css";
import { ACTIONS } from "../MainGrid/MainGrid";

type GridItemProps = {
  dispatch: Dispatch<{ type: string; payload: string }>;
  key: number;
  id: number;
};

const GridItemMobile = ({ dispatch, id }: GridItemProps) => {
  return (
    <div
      className="grid-item"
      onClick={() => {
        dispatch({ type: ACTIONS.SET_PAGES, payload: "pages" });
        switch (id) {
          case 0:
            dispatch({ type: ACTIONS.SET_GRID, payload: "click-0" });
            break;
          case 1:
            dispatch({ type: ACTIONS.SET_GRID, payload: "click-1" });
            break;
          case 2:
            dispatch({ type: ACTIONS.SET_GRID, payload: "click-2" });
            break;
          case 3:
            dispatch({ type: ACTIONS.SET_GRID, payload: "click-3" });
            break;
          case 4:
            dispatch({ type: ACTIONS.SET_GRID, payload: "click-4" });
            break;
          case 5:
            dispatch({ type: ACTIONS.SET_GRID, payload: "click-5" });
            break;
          case 6:
            dispatch({ type: ACTIONS.SET_GRID, payload: "click-6" });
            break;
          case 7:
            dispatch({ type: ACTIONS.SET_GRID, payload: "click-7" });
            break;
          case 8:
            dispatch({ type: ACTIONS.SET_GRID, payload: "click-8" });
            break;
        }
      }}
    >
      <SlideShow id={id} />
    </div>
  );
};

export default GridItemMobile;
