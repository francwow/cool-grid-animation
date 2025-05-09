import { Dispatch } from "react";
import SlideShow from "../slideShow/SlideShow";
import "./grid-item.css";
import { ACTIONS } from "../MainGrid/MainGrid";

type GridItemProps = {
  dispatch: Dispatch<{ type: string; payload: string | number }>;
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
              dispatch({ type: ACTIONS.HOVER_GRID, payload: 0 });
              break;
            case 1:
              dispatch({ type: ACTIONS.HOVER_GRID, payload: 1 });
              break;
            case 2:
              dispatch({ type: ACTIONS.HOVER_GRID, payload: 2 });
              break;
            case 3:
              dispatch({ type: ACTIONS.HOVER_GRID, payload: 3 });
              break;
            case 4:
              dispatch({ type: ACTIONS.HOVER_GRID, payload: 4 });
              break;
            case 5:
              dispatch({ type: ACTIONS.HOVER_GRID, payload: 5 });
              break;
            case 6:
              dispatch({ type: ACTIONS.HOVER_GRID, payload: 6 });
              break;
            case 7:
              dispatch({ type: ACTIONS.HOVER_GRID, payload: 7 });
              break;
            case 8:
              dispatch({ type: ACTIONS.HOVER_GRID, payload: 8 });
              break;
          }
        }
      }}
      onClick={() => {
        dispatch({ type: ACTIONS.NAVIGATE, payload: "pages" });
        switch (id) {
          case 0:
            dispatch({ type: ACTIONS.CLICK_GRID, payload: 0 });
            break;
          case 1:
            dispatch({ type: ACTIONS.CLICK_GRID, payload: 1 });
            break;
          case 2:
            dispatch({ type: ACTIONS.CLICK_GRID, payload: 2 });
            break;
          case 3:
            dispatch({ type: ACTIONS.CLICK_GRID, payload: 3 });
            break;
          case 4:
            dispatch({ type: ACTIONS.CLICK_GRID, payload: 4 });
            break;
          case 5:
            dispatch({ type: ACTIONS.CLICK_GRID, payload: 5 });
            break;
          case 6:
            dispatch({ type: ACTIONS.CLICK_GRID, payload: 6 });
            break;
          case 7:
            dispatch({ type: ACTIONS.CLICK_GRID, payload: 7 });
            break;
          case 8:
            dispatch({ type: ACTIONS.CLICK_GRID, payload: 8 });
            break;
        }
      }}
    >
      <SlideShow id={id} />
    </div>
  );
};

export default GridItemDeskTop;
