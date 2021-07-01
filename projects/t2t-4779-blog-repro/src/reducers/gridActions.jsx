import { types } from "./gridTypes";
import store from "../store";
import genId from "../helpers/idGenerator";
import { getCurrentViewAllGrids } from "./selectors";

export const actions = {
  // COMPLEX ACTIONS

  createNewView() {
    return (dispatch, getState) => {
      var newViewId = genId();

      dispatch(actions.addNewView(newViewId));
      dispatch(actions.changeView(newViewId));
    };
  },

  createNewTab(gridConfig) {
    return (dispatch, getState) => {
      let isViewAvailable = getState().currentViewInfo !== null;
      // give the grid an id
      gridConfig.id = genId();

      // handle edge case, when no views are available
      if (!isViewAvailable) {
        let newViewId = genId();
        dispatch(actions.createNewView(newViewId));
      }
      dispatch(actions.addNewTab(gridConfig));

      let currentViewAllGrids = getCurrentViewAllGrids(store.getState());
      let nextTabIndex = currentViewAllGrids.length - 1;
      let currentViewId = store.getState().currentViewInfo.id;

      dispatch(actions.setTabIndex(nextTabIndex));
      dispatch(
        actions.fetchGridData(currentViewId, gridConfig.id, gridConfig.url)
      );
    };
  },

  destroyView(viewId) {
    return (dispatch, getState) => {
      let currentViewId = getState().currentViewInfo.id;
      let isCurrentView = currentViewId === viewId;
      let isLastView = getState().allViews.length === 1;

      dispatch(actions.removeView(viewId));

      if (isLastView) {
        dispatch(actions.setCurrentViewInfoToNull());
        return;
      }

      if (isCurrentView && !isLastView) {
        let allViews = getState().allViews;
        let nextView = allViews[allViews.length - 1];
        dispatch(actions.changeView(nextView.id));
        return;
      }

      if (!isLastView && !isCurrentView) {
        dispatch(actions.changeView(currentViewId));
        return;
      }
    };
  },

  fetchGridData(viewId, gridId, url) {
    return (dispatch) => {
      fetch(url)
        .then((response) => {
          return response.json().then((rowData) => {
            dispatch(actions.fetchGridDataSuccess(viewId, gridId, rowData));
          });
        })
        .catch((err) => {
          dispatch(actions.fetchGridDataFail(err));
        });
    };
  },

  fetchGridDataSuccess(viewId, gridId, rowData) {
    return (dispatch) => {
      dispatch(actions.setGridData(viewId, gridId, rowData));
      dispatch(actions.setGridFetchAgainToFalse(viewId, gridId));
    };
  },

  fetchGridDataFail(err) {
    new Error(err, " <<<< FETCH GRID DATA FAIL");
  },

  changeTab(tabIndex) {
    return (dispatch, getState) => {
      let state = getState();
      let currentViewIndex = state.currentViewInfo.index;
      let currentView = state.allViews[currentViewIndex];
      let viewId = state.currentViewInfo.id;
      let grid = currentView.allGrids[tabIndex];
      let gridId = grid.id;
      let gridUrl = grid.url;
      let fetchAgain = grid.fetchAgain;

      dispatch(actions.setTabIndex(tabIndex));

      if (fetchAgain) {
        dispatch(actions.fetchGridData(viewId, gridId, gridUrl));
      }
    };
  },

  destroyTab(tabIndex) {
    return (dispatch, getState) => {
      dispatch({
        type: types.DESTROY_TAB,
        payload: tabIndex,
      });

      // if all CurrentView tabIndex exists in allGrids then do nothing, else change to next available tab

      const currentViewIndex = getState().currentViewInfo.index;
      const currentView = getState().allViews[currentViewIndex];

      const indx = currentView.tabIndex;
      const allGrids = currentView.allGrids;

      let doesGridExist = allGrids[indx];
      if (doesGridExist) return;

      const nextAvailableIndex = allGrids.length - 1;

      if (nextAvailableIndex !== -1)
        dispatch(actions.changeTab(nextAvailableIndex));
    };
  },

  // SIMPLE ACTIONS
  addNewView(id) {
    return {
      type: types.ADD_NEW_VIEW,
      payload: id,
    };
  },

  changeTabName(viewId, gridId, newName) {
    return {
      type: types.CHANGE_TAB_NAME,
      payload: { viewId, gridId, newName },
    };
  },

  removeView(id) {
    return {
      type: types.REMOVE_VIEW,
      payload: id,
    };
  },

  changeViewName(viewId, newName) {
    return {
      type: types.CHANGE_VIEW_NAME,
      payload: { viewId, newName },
    };
  },

  changeView(id) {
    return {
      type: types.CHANGE_VIEW,
      payload: id,
    };
  },

  addNewTab(gridConfig) {
    return {
      type: types.ADD_NEW_TAB,
      payload: gridConfig,
    };
  },

  setTabIndex(tabIndex) {
    return {
      type: types.SET_TAB_INDEX,
      payload: tabIndex,
    };
  },

  setCurrentViewInfoToNull() {
    return {
      type: types.SET_CURRENT_VIEW_INFO_TO_NULL,
    };
  },

  setGridData(viewId, gridId, newData) {
    return {
      type: types.SET_GRID_DATA,
      payload: { viewId, gridId, newData },
    };
  },

  saveGridSortModel(gridId, sortModel) {
    return {
      type: types.SAVE_GRID_SORT_MODEL,
      payload: { gridId, sortModel },
    };
  },
  saveGridFilterModel(gridId, filterModel) {
    return {
      type: types.SAVE_GRID_FILTER_MODEL,
      payload: { gridId, filterModel },
    };
  },

  saveGridColumnState(gridId, columnState) {
    return {
      type: types.SAVE_GRID_COLUMN_STATE,
      payload: { gridId, columnState },
    };
  },

  saveGridColumnGroupState(gridId, columnGroupState) {
    return {
      type: types.SAVE_GRID_COLUMN_GROUP_STATE,
      payload: { gridId, columnGroupState },
    };
  },

  saveGridPivotModeState(gridId, isPivotMode) {
    return {
      type: types.SAVE_GRID_PIVOT_MODE_STATE,
      payload: { gridId, isPivotMode },
    };
  },

  // except for rowData
  saveStoreStateToLocalStorage() {
    return {
      type: types.SAVE_STORE_STATE_TO_LOCAL_STORAGE,
    };
  },

  restoreStoreStateToLocalStorage() {
    return {
      type: types.RESTORE_STORE_STATE_TO_LOCAL_STORAGE,
    };
  },

  setGridFetchAgainToFalse(viewId, gridId) {
    return {
      type: types.SET_GRID_FETCH_AGAIN_TO_FALSE,
      payload: { viewId, gridId },
    };
  },
  setRowSelectionSyncStatus(viewId, status) {
    return {
      type: types.SET_ROW_SELECTION_SYNC_STATUS,
      payload: { viewId, status },
    };
  },
};
