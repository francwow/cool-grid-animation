// const ACTIONS = {
//   SET_GRID: "set-grid",
// };

// const initialState = {
//   grid: {
//     columns: "4fr 4fr 4fr",
//     rows: "4fr 4fr 4fr",
//   },
// };

// type StateType = {
//   grid: { columns: string; rows: string };
// };

// type ActionType = { type: string; payload: string };

// const reducer = (state: StateType, { type, payload }: ActionType) => {
//   switch (type) {
//     case ACTIONS.SET_GRID:
//       if (payload === "hover-0") {
//         return {
//           ...state,
//           grid: { columns: "6fr 4fr 4fr", rows: "6fr 4fr 4fr" },
//         };
//       }
//       if (payload === "hover-1") {
//         return {
//           ...state,
//           grid: { columns: "4fr 6fr 4fr", rows: "6fr 4fr 4fr" },
//         };
//       }
//       if (payload === "hover-2") {
//         return {
//           ...state,
//           grid: { columns: "4fr 4fr 6fr", rows: "6fr 4fr 4fr" },
//         };
//       }
//       if (payload === "hover-3") {
//         return {
//           ...state,
//           grid: { columns: "6fr 4fr 4fr", rows: "4fr 6fr 4fr" },
//         };
//       }
//       if (payload === "hover-4") {
//         return {
//           ...state,
//           grid: { columns: "4fr 6fr 4fr", rows: "4fr 6fr 4fr" },
//         };
//       }
//       if (payload === "hover-5") {
//         return {
//           ...state,
//           grid: { columns: "4fr 4fr 6fr", rows: "4fr 6fr 4fr" },
//         };
//       }
//       if (payload === "hover-6") {
//         return {
//           ...state,
//           grid: { columns: "6fr 4fr 4fr", rows: "4fr 4fr 6fr" },
//         };
//       }
//       if (payload === "hover-7") {
//         return {
//           ...state,
//           grid: { columns: "4fr 6fr 4fr", rows: "4fr 4fr 6fr" },
//         };
//       }
//       if (payload === "hover-8") {
//         return {
//           ...state,
//           grid: { columns: "4fr 4fr 6fr", rows: "4fr 4fr 6fr" },
//         };
//       }
//       if (payload === "click-0") {
//         return {
//           ...state,
//           grid: { columns: "12fr 0fr 0fr", rows: "12fr 0fr 0fr" },
//         };
//       }
//       if (payload === "click-1") {
//         return {
//           ...state,
//           grid: { columns: "0fr 12fr 0fr", rows: "12fr 0fr 0fr" },
//         };
//       }
//       if (payload === "click-2") {
//         return {
//           ...state,
//           grid: { columns: "0fr 0fr 12fr", rows: "12fr 0fr 0fr" },
//         };
//       }
//       if (payload === "click-3") {
//         return {
//           ...state,
//           grid: { columns: "12fr 0fr 0fr", rows: "0fr 12fr 0fr" },
//         };
//       }
//       if (payload === "click-4") {
//         return {
//           ...state,
//           grid: { columns: "0fr 12fr 0fr", rows: "0fr 12fr 0fr" },
//         };
//       }
//       if (payload === "click-5") {
//         return {
//           ...state,
//           grid: { columns: "0fr 0fr 12fr", rows: "0fr 12fr 0fr" },
//         };
//       }
//       if (payload === "click-6") {
//         return {
//           ...state,
//           grid: { columns: "12fr 0fr 0fr", rows: "0fr 0fr 12fr" },
//         };
//       }
//       if (payload === "click-7") {
//         return {
//           ...state,
//           grid: { columns: "0fr 12fr 0fr", rows: "0fr 0fr 12fr" },
//         };
//       }
//       if (payload === "click-8") {
//         return {
//           ...state,
//           grid: { columns: "0fr 0fr 12fr", rows: "0fr 0fr 12fr" },
//         };
//       }
//       if (payload === "click-menu") {
//         return {
//           initialState,
//         };
//       }
//   }
// };
