import { types } from "../reducers/gridTypes";

import { produce } from "immer"; // https://www.youtube.com/watch?v=FmKjwh34Rn8
import {
  getCurrentViewAllGrids,
  getViewIndexById,
  getGridByViewAndGridId,
  getGridById,
  getViewById,
} from "./selectors";

export default function gridReducer(state = {}, action) {
  const payload = action.payload;
  switch (action.type) {
    case types.ADD_NEW_VIEW:
      return addNewView(state, payload);

    case types.REMOVE_VIEW:
      return removeView(state, payload);

    case types.CHANGE_VIEW:
      return changeView(state, payload);
    case types.CHANGE_VIEW_NAME:
      return changeViewName(state, payload);

    case types.ADD_NEW_TAB:
      return addNewTab(state, payload);

    case types.CHANGE_TAB_NAME:
      return changeTabName(state, payload);

    case types.SET_TAB_INDEX:
      return changeTabIndex(state, payload);

    case types.SET_CURRENT_VIEW_INFO_TO_NULL:
      return setCurrentViewInfoToNull(state, payload);

    case types.SET_GRID_DATA:
      return setGridData(state, payload);

    case types.SAVE_GRID_SORT_MODEL:
      return saveGridSortModel(state, payload);

    case types.SAVE_GRID_FILTER_MODEL:
      return saveGridFilterModel(state, payload);

    case types.SAVE_GRID_COLUMN_STATE:
      return saveGridColumnState(state, payload);

    case types.SAVE_GRID_COLUMN_GROUP_STATE:
      return saveGridColumnGroupState(state, payload);

    case types.SAVE_GRID_PIVOT_MODE_STATE:
      return saveGridPivotModeState(state, payload);

    case types.SAVE_STORE_STATE_TO_LOCAL_STORAGE:
      return saveStoreStateToLocalStorage(state);
    case types.RESTORE_STORE_STATE_TO_LOCAL_STORAGE:
      return restoreStoreStateToLocalStorage(state);

    case types.SET_GRID_FETCH_AGAIN_TO_FALSE:
      return setGridFetchAgainToFalse(state, payload);
    case types.DESTROY_TAB:
      return destroyTab(state, payload);

    case types.SET_ROW_SELECTION_SYNC_STATUS:
      return setRowSelectionSyncStatus(state, payload);

    default:
      return state;
  }
}

function addNewView(state, id) {
  return produce(state, (draftState) => {
    let newView = {
      id: id,
      allGrids: [],
    };

    draftState.allViews.push(newView);
  });
}

function removeView(state, id) {
  return produce(state, (draftState) => {
    let viewIndexToBeRemoved = getViewIndexById(draftState, id);
    draftState.allViews.splice(viewIndexToBeRemoved, 1);
  });
}

function changeView(state, id) {
  return produce(state, (draftState) => {
    let index = draftState.allViews.findIndex((view) => {
      return view.id === id;
    });
    let updatedCurrentViewInfo = { id, index };
    draftState.currentViewInfo = updatedCurrentViewInfo;
  });
}

function addNewTab(state, gridConfig) {
  return produce(state, (draftState) => {
    let currentViewAllGrids = getCurrentViewAllGrids(draftState);
    currentViewAllGrids.push(gridConfig);
  });
}

function changeTabName(state, { viewId, gridId, newName }) {
  return produce(state, (draftState) => {
    let grid = getGridByViewAndGridId(draftState, viewId, gridId);
    grid.name = newName;
  });
}

function changeTabIndex(state, tabIndex) {
  return produce(state, (draftState) => {
    let currentView = draftState.allViews[draftState.currentViewInfo.index];
    currentView.tabIndex = tabIndex;
  });
}

function setCurrentViewInfoToNull(state) {
  return produce(state, (draftState) => {
    draftState.currentViewInfo = null;
  });
}

function setGridData(state, { viewId, gridId, newData }) {
  return produce(state, (draftState) => {
    let grid = getGridByViewAndGridId(draftState, viewId, gridId);
    grid.rowData = newData;
  });
}

function saveGridSortModel(state, { gridId, sortModel }) {
  return produce(state, (draftState) => {
    let grid = getGridById(draftState, gridId);

    grid.sortModel = sortModel;
  });
}

function saveGridFilterModel(state, { gridId, filterModel }) {
  return produce(state, (draftState) => {
    let grid = getGridById(draftState, gridId);

    grid.filterModel = filterModel;
  });
}

function saveGridColumnState(state, { gridId, columnState }) {
  return produce(state, (draftState) => {
    let grid = getGridById(draftState, gridId);
    if (grid) {
      grid.columnState = columnState;
    }
  });
}

function saveGridColumnGroupState(state, { gridId, columnGroupState }) {
  return produce(state, (draftState) => {
    let grid = getGridById(draftState, gridId);
    if (grid) {
      grid.columnGroupState = columnGroupState;
    }
  });
}

function saveGridPivotModeState(state, { gridId, isPivotMode }) {
  return produce(state, (draftState) => {
    let grid = getGridById(draftState, gridId);
    grid.isPivotMode = isPivotMode;
  });
}

function saveStoreStateToLocalStorage(state) {
  let cache = {
    currentViewInfo: state.currentViewInfo,
    allViews: [],
  };

  state.allViews.forEach((view) => {
    let cachedView = {
      id: view.id,
      tabIndex: view.tabIndex,
      allGrids: [],
      rowSelectionSyncStatus: view?.rowSelectionSyncStatus,
      name: view.name,
    };

    view.allGrids.forEach(
      ({
        id,
        columnDefs,
        url,
        sortModel,
        filterModel,
        columnState,
        columnGroupState,
        isPivotMode,
        name,
      }) => {
        let cachedGrid = {
          id,
          columnDefs,
          url,
          sortModel,
          filterModel,
          columnState,
          columnGroupState,
          fetchAgain: true,
          isPivotMode,
          name,
        };

        cachedView.allGrids.push(cachedGrid);
      }
    );

    cache.allViews.push(cachedView);
  });

  let cacheStringified = JSON.stringify(cache);

  localStorage.setItem("cache", cacheStringified);

  return state;
}

function restoreStoreStateToLocalStorage(state) {
  return JSON.parse(localStorage.getItem("cache"));
}

function setGridFetchAgainToFalse(state, { viewId, gridId }) {
  return produce(state, (draftState) => {
    let grid = getGridByViewAndGridId(draftState, viewId, gridId);
    grid.fetchAgain = false;
  });
}

function destroyTab(state, tabIndex) {
  return produce(state, (draftState) => {
    let currentViewAllGrids = getCurrentViewAllGrids(draftState);

    currentViewAllGrids.splice(tabIndex, 1);
  });
}

function setRowSelectionSyncStatus(state, { viewId, status }) {
  return produce(state, (draftState) => {
    let view = getViewById(draftState, viewId);
    view.rowSelectionSyncStatus = status;
  });
}

function changeViewName(state, { viewId, newName }) {
  return produce(state, (draftState) => {
    let view = getViewById(draftState, viewId);
    view.name = newName;
  });
}
