import { Dispatch } from "react";
import SlideShow from "../slideShow/SlideShow";
import "./grid-item.css";
import { ACTIONS } from "../MainGrid/MainGrid";

type GridItemProps = {
  dispatch: Dispatch<{ type: string; payload: string }>;
  key: number;
  id: number;
  navigation: "home" | "pages";
};

const GridItemDeskTop = ({ dispatch, id, navigation }: GridItemProps) => {
  return (
    <div
      className={"grid-item"}
      onPointerEnter={() => {
        if (navigation === "pages") {
          return;
        } else if (navigation === "home") {
          switch (id) {
            case 0:
              dispatch({ type: ACTIONS.SET_GRID, payload: "hover-0" });
              break;
            case 1:
              dispatch({ type: ACTIONS.SET_GRID, payload: "hover-1" });
              break;
            case 2:
              dispatch({ type: ACTIONS.SET_GRID, payload: "hover-2" });
              break;
            case 3:
              dispatch({ type: ACTIONS.SET_GRID, payload: "hover-3" });
              break;
            case 4:
              dispatch({ type: ACTIONS.SET_GRID, payload: "hover-4" });
              break;
            case 5:
              dispatch({ type: ACTIONS.SET_GRID, payload: "hover-5" });
              break;
            case 6:
              dispatch({ type: ACTIONS.SET_GRID, payload: "hover-6" });
              break;
            case 7:
              dispatch({ type: ACTIONS.SET_GRID, payload: "hover-7" });
              break;
            case 8:
              dispatch({ type: ACTIONS.SET_GRID, payload: "hover-8" });
              break;
          }
        }
      }}
      onClick={() => {
        dispatch({ type: ACTIONS.SET_PAGES, payload: "pages" });
        console.log(id);
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

export default GridItemDeskTop;
