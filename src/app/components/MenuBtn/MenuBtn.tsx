import { Dispatch } from "react";
import "./menu-btn.css";
import { ACTIONS } from "../MainGrid/MainGrid";

type MenuBtnProps = {
  dispatch: Dispatch<{ type: string; payload: string }>;
};

const MenuBtn = ({ dispatch }: MenuBtnProps) => {
  return (
    <div
      onClick={() => {
        dispatch({ type: ACTIONS.SET_GRID, payload: "click-menu" });
      }}
      className="menu-btn"
    >
      MENU
    </div>
  );
};

export default MenuBtn;
