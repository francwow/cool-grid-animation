"use client";

import { useReducer } from "react";
import "./main-grid.css";
import { useMediaQuery } from "usehooks-ts";
import GridItemDeskTop from "../GridItem/GridItemDeskTop";
import GridItemMobile from "../GridItem/GridItemMobile";
import MenuBtn from "../MenuBtn/MenuBtn";

export const ACTIONS = {
  SET_GRID: "set-grid",
  NAVIGATION: "navigation",
  SET_PAGES: "set_pages",
};

const initialState = {
  grid: {
    columns: "4fr 4fr 4fr",
    rows: "4fr 4fr 4fr",
  },
  navigation: "home",
};

type StateType = {
  grid: { columns: string; rows: string };
  navigation: "home" | "pages";
};

type ActionType = { type: string; payload: string };

const reducer = (state: StateType, { type, payload }: ActionType) => {
  switch (type) {
    case ACTIONS.SET_GRID:
      if (payload === "hover-0") {
        return {
          ...state,
          grid: { columns: "6fr 4fr 4fr", rows: "6fr 4fr 4fr" },
        };
      }
      if (payload === "hover-1") {
        return {
          ...state,
          grid: { columns: "4fr 6fr 4fr", rows: "6fr 4fr 4fr" },
        };
      }
      if (payload === "hover-2") {
        return {
          ...state,
          grid: { columns: "4fr 4fr 6fr", rows: "6fr 4fr 4fr" },
        };
      }
      if (payload === "hover-3") {
        return {
          ...state,
          grid: { columns: "6fr 4fr 4fr", rows: "4fr 6fr 4fr" },
        };
      }
      if (payload === "hover-4") {
        return {
          ...state,
          grid: { columns: "4fr 6fr 4fr", rows: "4fr 6fr 4fr" },
        };
      }
      if (payload === "hover-5") {
        return {
          ...state,
          grid: { columns: "4fr 4fr 6fr", rows: "4fr 6fr 4fr" },
        };
      }
      if (payload === "hover-6") {
        return {
          ...state,
          grid: { columns: "6fr 4fr 4fr", rows: "4fr 4fr 6fr" },
        };
      }
      if (payload === "hover-7") {
        return {
          ...state,
          grid: { columns: "4fr 6fr 4fr", rows: "4fr 4fr 6fr" },
        };
      }
      if (payload === "hover-8") {
        return {
          ...state,
          grid: { columns: "4fr 4fr 6fr", rows: "4fr 4fr 6fr" },
        };
      }
      if (payload === "click-0") {
        return {
          ...state,
          grid: { columns: "12fr 0fr 0fr", rows: "12fr 0fr 0fr" },
        };
      }
      if (payload === "click-1") {
        return {
          ...state,
          grid: { columns: "0fr 12fr 0fr", rows: "12fr 0fr 0fr" },
        };
      }
      if (payload === "click-2") {
        return {
          ...state,
          grid: { columns: "0fr 0fr 12fr", rows: "12fr 0fr 0fr" },
        };
      }
      if (payload === "click-3") {
        return {
          ...state,
          grid: { columns: "12fr 0fr 0fr", rows: "0fr 12fr 0fr" },
        };
      }
      if (payload === "click-4") {
        return {
          ...state,
          grid: { columns: "0fr 12fr 0fr", rows: "0fr 12fr 0fr" },
        };
      }
      if (payload === "click-5") {
        return {
          ...state,
          grid: { columns: "0fr 0fr 12fr", rows: "0fr 12fr 0fr" },
        };
      }
      if (payload === "click-6") {
        return {
          ...state,
          grid: { columns: "12fr 0fr 0fr", rows: "0fr 0fr 12fr" },
        };
      }
      if (payload === "click-7") {
        return {
          ...state,
          grid: { columns: "0fr 12fr 0fr", rows: "0fr 0fr 12fr" },
        };
      }
      if (payload === "click-8") {
        return {
          ...state,
          grid: { columns: "0fr 0fr 12fr", rows: "0fr 0fr 12fr" },
        };
      }
      if (payload === "click-menu") {
        return initialState;
      }

      return state;

    case ACTIONS.SET_PAGES:
      return {
        ...state,
        navigation: payload,
      };
  }
};

const MainGrid = () => {
  const [{ grid, navigation }, dispatch] = useReducer(reducer, initialState);

  const deskTop = useMediaQuery("(min-width: 991px)");

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: grid.columns,
    gridTemplateRows: grid.rows,
    gap: `${navigation === "home" ? "5px" : "0px"}`,
    transition: "0.3s ease all",
  };

  return deskTop ? (
    <div className="grid-container">
      {navigation === "pages" ? <MenuBtn dispatch={dispatch} /> : null}
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
    // <PageContainer />
    <div className="grid-container">
      {navigation === "pages" ? <MenuBtn dispatch={dispatch} /> : null}
      <div className="grid" style={gridStyle}>
        {Array.from({ length: 9 }).map((_, i) => (
          <GridItemMobile key={i} dispatch={dispatch} id={i} />
        ))}
      </div>
    </div>
  );
};

export default MainGrid;
