import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import gridReducer from "./reducers/gridReducer";
import logger from "redux-logger";

import thunk from "redux-thunk";

let initialState;
let cache = window.localStorage.getItem("cache");

if (cache) {
  let cacheParsed = JSON.parse(cache);
  initialState = { ...cacheParsed };
} else {
  initialState = {
    ...hardCodedState(),
  };
}

export default createStore(
  gridReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
  // composeWithDevTools(applyMiddleware(thunk, logger))
);

function hardCodedState() {
  let stateAsString = `{"currentViewInfo":{"id":"Thu Jun 04 2020 08:01:54 GMT+0100 (British Summer Time)2","index":0},"allViews":[{"id":"Thu Jun 04 2020 08:01:54 GMT+0100 (British Summer Time)2","tabIndex":0,"allGrids":[{"id":"Thu Jun 04 2020 08:01:54 GMT+0100 (British Summer Time)0","columnDefs":[{"field":"athlete"},{"field":"age"},{"field":"country"},{"field":"year"},{"field":"date"},{"field":"sport"},{"field":"gold"},{"field":"silver"},{"field":"bronze"},{"field":"total"}],"url":"https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json","sortModel":[],"fetchAgain":true,"name":"Tab 1"},{"id":"Thu Jun 04 2020 08:01:55 GMT+0100 (British Summer Time)3","columnDefs":[{"field":"athlete"},{"field":"age"},{"field":"country"},{"field":"year"},{"field":"date"},{"field":"sport"},{"field":"gold"},{"field":"silver"},{"field":"bronze"},{"field":"total"}],"url":"https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json","fetchAgain":true,"name":"Tab 2"}],"rowSelectionSyncStatus":"SYNC_DONE","name":"View A"},{"id":"Thu Jun 04 2020 08:01:56 GMT+0100 (British Summer Time)4","tabIndex":0,"allGrids":[{"id":"Thu Jun 04 2020 08:02:08 GMT+0100 (British Summer Time)5","columnDefs":[{"field":"athlete"},{"field":"age"},{"field":"country"},{"field":"year"},{"field":"date"},{"field":"sport"},{"field":"gold"},{"field":"silver"},{"field":"bronze"},{"field":"total"}],"url":"https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json","fetchAgain":true}],"rowSelectionSyncStatus":"SYNC_DONE","name":"View B"}]}`;
  return JSON.parse(stateAsString);
}
