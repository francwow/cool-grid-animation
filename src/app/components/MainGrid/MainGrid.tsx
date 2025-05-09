"use client";

import { useReducer } from "react";
import "./main-grid.css";
import { useMediaQuery } from "usehooks-ts";
import GridItemDeskTop from "../GridItem/GridItemDeskTop";
import GridItemMobile from "../GridItem/GridItemMobile";
import MenuBtn from "../MenuBtn/MenuBtn";
import PagesContainer from "../PagesContainer/PagesContainer";

export const ACTIONS = {
  HOVER_GRID: "hover_grid",
  CLICK_GRID: "click_grid",
  CLICK_MENU: "click_menu",
  NAVIGATE: "navigate",
  ACTIVE_ITEM: "active_item",
};

const initialState = {
  grid: {
    columns: "4fr 4fr 4fr",
    rows: "4fr 4fr 4fr",
  },
  navigation: "home",
  itemActive: null,
};

// type StateType = {
//   grid: { columns: string; rows: string };
//   navigation: "home" | "pages";
//   itemActive: null | number;
// };

type ActionType = { type: string; payload: string | number };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: any, { type, payload }: ActionType) => {
  switch (type) {
    case ACTIONS.HOVER_GRID:
      if (payload === 0) {
        return {
          ...state,
          grid: { columns: "6fr 4fr 4fr", rows: "6fr 4fr 4fr" },
        };
      }
      if (payload === 1) {
        return {
          ...state,
          grid: { columns: "4fr 6fr 4fr", rows: "6fr 4fr 4fr" },
        };
      }
      if (payload === 2) {
        return {
          ...state,
          grid: { columns: "4fr 4fr 6fr", rows: "6fr 4fr 4fr" },
        };
      }
      if (payload === 3) {
        return {
          ...state,
          grid: { columns: "6fr 4fr 4fr", rows: "4fr 6fr 4fr" },
        };
      }
      if (payload === 4) {
        return {
          ...state,
          grid: { columns: "4fr 6fr 4fr", rows: "4fr 6fr 4fr" },
        };
      }
      if (payload === 5) {
        return {
          ...state,
          grid: { columns: "4fr 4fr 6fr", rows: "4fr 6fr 4fr" },
        };
      }
      if (payload === 6) {
        return {
          ...state,
          grid: { columns: "6fr 4fr 4fr", rows: "4fr 4fr 6fr" },
        };
      }
      if (payload === 7) {
        return {
          ...state,
          grid: { columns: "4fr 6fr 4fr", rows: "4fr 4fr 6fr" },
        };
      }
      if (payload === 8) {
        return {
          ...state,
          grid: { columns: "4fr 4fr 6fr", rows: "4fr 4fr 6fr" },
        };
      }

    case ACTIONS.CLICK_GRID:
      if (payload === 0) {
        return {
          ...state,
          grid: { columns: "12fr 0fr 0fr", rows: "12fr 0fr 0fr" },
          itemActive: payload,
        };
      }
      if (payload === 1) {
        return {
          ...state,
          grid: { columns: "0fr 12fr 0fr", rows: "12fr 0fr 0fr" },
          itemActive: payload,
        };
      }
      if (payload === 2) {
        return {
          ...state,
          grid: { columns: "0fr 0fr 12fr", rows: "12fr 0fr 0fr" },
          itemActive: payload,
        };
      }
      if (payload === 3) {
        return {
          ...state,
          grid: { columns: "12fr 0fr 0fr", rows: "0fr 12fr 0fr" },
          itemActive: payload,
        };
      }
      if (payload === 4) {
        return {
          ...state,
          grid: { columns: "0fr 12fr 0fr", rows: "0fr 12fr 0fr" },
          itemActive: payload,
        };
      }
      if (payload === 5) {
        return {
          ...state,
          grid: { columns: "0fr 0fr 12fr", rows: "0fr 12fr 0fr" },
          itemActive: payload,
        };
      }
      if (payload === 6) {
        return {
          ...state,
          grid: { columns: "12fr 0fr 0fr", rows: "0fr 0fr 12fr" },
          itemActive: payload,
        };
      }
      if (payload === 7) {
        return {
          ...state,
          grid: { columns: "0fr 12fr 0fr", rows: "0fr 0fr 12fr" },
          itemActive: payload,
        };
      }
      if (payload === 8) {
        return {
          ...state,
          grid: { columns: "0fr 0fr 12fr", rows: "0fr 0fr 12fr" },
          itemActive: payload,
        };
      }
      return state;

    case ACTIONS.CLICK_MENU:
      return initialState;

    case ACTIONS.NAVIGATE:
      return {
        ...state,
        navigation: payload,
      };

    // case ACTIONS.ACTIVE_ITEM:
    //   if (payload === 0) {
    //     return {
    //       ...state,
    //       grid: { columns: "12fr 0fr 0fr", rows: "12fr 0fr 0fr" },
    //       itemActive: payload,
    //     };
    //   }
    //   return state;
  }
};

const MainGrid = () => {
  const [{ grid, navigation, itemActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const deskTop = useMediaQuery("(min-width: 991px)");

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: grid.columns,
    gridTemplateRows: grid.rows,
    gap: `${navigation === "home" ? "5px" : "0px"}`,
    transition: "0.3s ease all",
    zIndex: "9",
  };

  return (
    <div className="grid-wrapper">
      {navigation === "pages" ? <MenuBtn dispatch={dispatch} /> : null}
      {navigation === "pages" ? (
        <PagesContainer itemActive={itemActive} dispatch={dispatch} />
      ) : null}
      {deskTop ? (
        <div className="grid-container">
          <div className="grid" style={gridStyle}>
            {Array.from({ length: 9 }).map((_, i) => (
              <GridItemDeskTop
                key={i}
                dispatch={dispatch}
                id={i}
                navigation={navigation}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid-container">
          <div className="grid" style={gridStyle}>
            {Array.from({ length: 9 }).map((_, i) => (
              <GridItemMobile key={i} dispatch={dispatch} id={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainGrid;
