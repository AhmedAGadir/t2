export function getCurrentViewAllGrids(state) {
    return state?.allViews[state?.currentViewInfo?.index]?.allGrids
      ? state?.allViews[state?.currentViewInfo?.index].allGrids
      : [];
  }
  
  export function getCurrentViewTabIndex(state) {
    let currentViewInfo = state.currentViewInfo;
    let currentViewIndex = currentViewInfo?.index;
    let currentView = state?.allViews[currentViewIndex];
    let tabIndex = currentView?.tabIndex ? currentView.tabIndex : 0;
  
    return tabIndex;
  }
  
  export function getCurrentView(state) {
    return state.currentViewInfo
      ? state.allViews[state.currentViewInfo.index]
      : null;
  }
  
  export function getViewById(state, id) {
    let viewIndex = state.allViews.findIndex((view) => {
      return view.id === id;
    });
  
    let view = state.allViews[viewIndex];
  
    if (view) {
      return view;
    }
  
    throw new Error("VIEW NOT FOUND!!");
  }
  
  export function getViewIndexById(state, id) {
    let viewIndex = state.allViews.findIndex((view) => {
      return view.id === id;
    });
  
    if (viewIndex > -1) {
      return viewIndex;
    }
  
    throw new Error("VIEW INDEX NOT FOUND!!");
  }
  
  export function getGridByViewAndGridId(state, viewId, gridId) {
    let view = getViewById(state, viewId);
  
    let gridIndex = view.allGrids.findIndex((grid) => {
      return grid.id === gridId;
    });
  
    let grid = view.allGrids[gridIndex];
  
    if (grid) {
      return grid;
    }
  
    throw new Error("GRID NOT FOUND!!");
  }
  
  export function getGridById(state, gridId) {
    let allViews = state.allViews;
    let foundGrid;
  
    for (let i = 0; i < allViews.length; i++) {
      let allGrids = allViews[i].allGrids;
  
      if (typeof grid === "object") break;
  
      for (let j = 0; j < allGrids.length; j++) {
        let grid = allGrids[j];
  
        if (grid.id === gridId) {
          foundGrid = grid;
          break;
        }
      }
    }
  
    if (foundGrid) return foundGrid;
  
    new Error(" GRID NOT FOUND << < << ");
  }
  