(this["webpackJsonpcached-react"]=this["webpackJsonpcached-react"]||[]).push([[0],{84:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(13),o=n.n(a),c=(n(84),n(9)),l=n(10),d=n(18),s=n(69),u="DESTROY_TAB",f="ADD_NEW_VIEW",v="REMOVE_VIEW",p="CHANGE_VIEW_NAME",h="CHANGE_VIEW",b="ADD_NEW_TAB",m="CHANGE_TAB_NAME",w="SET_TAB_INDEX",g="SET_CURRENT_VIEW_INFO_TO_NULL",S="SET_GRID_DATA",j="SAVE_GRID_SORT_MODEL",O="SAVE_GRID_FILTER_MODEL",y="SAVE_GRID_COLUMN_STATE",I="SAVE_GRID_COLUMN_GROUP_STATE",C="SAVE_GRID_PIVOT_MODE_STATE",V="SAVE_STORE_STATE_TO_LOCAL_STORAGE",T="RESTORE_STORE_STATE_TO_LOCAL_STORAGE",N="SET_GRID_FETCH_AGAIN_TO_FALSE",G="SET_ROW_SELECTION_SYNC_STATUS",D=n(12);function x(e){var t,n,i;return(null===e||void 0===e||null===(t=e.allViews[null===e||void 0===e||null===(n=e.currentViewInfo)||void 0===n?void 0:n.index])||void 0===t?void 0:t.allGrids)?null===e||void 0===e?void 0:e.allViews[null===e||void 0===e||null===(i=e.currentViewInfo)||void 0===i?void 0:i.index].allGrids:[]}function A(e){var t=e.currentViewInfo,n=null===t||void 0===t?void 0:t.index,i=null===e||void 0===e?void 0:e.allViews[n];return(null===i||void 0===i?void 0:i.tabIndex)?i.tabIndex:0}function E(e){return e.currentViewInfo?e.allViews[e.currentViewInfo.index]:null}function M(e,t){var n=e.allViews.findIndex((function(e){return e.id===t})),i=e.allViews[n];if(i)return i;throw new Error("VIEW NOT FOUND!!")}function _(e,t,n){var i=M(e,t),r=i.allGrids.findIndex((function(e){return e.id===n})),a=i.allGrids[r];if(a)return a;throw new Error("GRID NOT FOUND!!")}function R(e,t){for(var n,i=e.allViews,r=0;r<i.length;r++){var a=i[r].allGrids;if("object"===typeof grid)break;for(var o=0;o<a.length;o++){var c=a[o];if(c.id===t){n=c;break}}}if(n)return n;new Error(" GRID NOT FOUND << < << ")}function k(e,t){return Object(D.a)(e,(function(e){var n={id:t,allGrids:[]};e.allViews.push(n)}))}function F(e,t){return Object(D.a)(e,(function(e){var n=function(e,t){var n=e.allViews.findIndex((function(e){return e.id===t}));if(n>-1)return n;throw new Error("VIEW INDEX NOT FOUND!!")}(e,t);e.allViews.splice(n,1)}))}function L(e,t){return Object(D.a)(e,(function(e){var n=e.allViews.findIndex((function(e){return e.id===t})),i={id:t,index:n};e.currentViewInfo=i}))}function P(e,t){return Object(D.a)(e,(function(e){x(e).push(t)}))}function W(e,t){var n=t.viewId,i=t.gridId,r=t.newName;return Object(D.a)(e,(function(e){_(e,n,i).name=r}))}function B(e,t){return Object(D.a)(e,(function(e){e.allViews[e.currentViewInfo.index].tabIndex=t}))}function U(e){return Object(D.a)(e,(function(e){e.currentViewInfo=null}))}function z(e,t){var n=t.viewId,i=t.gridId,r=t.newData;return Object(D.a)(e,(function(e){_(e,n,i).rowData=r}))}function J(e,t){var n=t.gridId,i=t.sortModel;return Object(D.a)(e,(function(e){R(e,n).sortModel=i}))}function Y(e,t){var n=t.gridId,i=t.filterModel;return Object(D.a)(e,(function(e){R(e,n).filterModel=i}))}function H(e,t){var n=t.gridId,i=t.columnState;return Object(D.a)(e,(function(e){var t=R(e,n);t&&(t.columnState=i)}))}function K(e,t){var n=t.gridId,i=t.columnGroupState;return Object(D.a)(e,(function(e){var t=R(e,n);t&&(t.columnGroupState=i)}))}function X(e,t){var n=t.gridId,i=t.isPivotMode;return Object(D.a)(e,(function(e){R(e,n).isPivotMode=i}))}function q(e){var t={currentViewInfo:e.currentViewInfo,allViews:[]};e.allViews.forEach((function(e){var n={id:e.id,tabIndex:e.tabIndex,allGrids:[],rowSelectionSyncStatus:null===e||void 0===e?void 0:e.rowSelectionSyncStatus,name:e.name};e.allGrids.forEach((function(e){var t={id:e.id,columnDefs:e.columnDefs,url:e.url,sortModel:e.sortModel,filterModel:e.filterModel,columnState:e.columnState,columnGroupState:e.columnGroupState,fetchAgain:!0,isPivotMode:e.isPivotMode,name:e.name};n.allGrids.push(t)})),t.allViews.push(n)}));var n=JSON.stringify(t);return localStorage.setItem("cache",n),e}function Q(e){return JSON.parse(localStorage.getItem("cache"))}function Z(e,t){var n=t.viewId,i=t.gridId;return Object(D.a)(e,(function(e){_(e,n,i).fetchAgain=!1}))}function $(e,t){return Object(D.a)(e,(function(e){x(e).splice(t,1)}))}function ee(e,t){var n=t.viewId,i=t.status;return Object(D.a)(e,(function(e){M(e,n).rowSelectionSyncStatus=i}))}function te(e,t){var n=t.viewId,i=t.newName;return Object(D.a)(e,(function(e){M(e,n).name=i}))}n(89);var ne,ie=n(70),re=window.localStorage.getItem("cache");if(re){var ae=JSON.parse(re);ne=Object(l.a)({},ae)}else ne=Object(l.a)({},function(){var e='{"currentViewInfo":{"id":"Thu Jun 04 2020 08:01:54 GMT+0100 (British Summer Time)2","index":0},"allViews":[{"id":"Thu Jun 04 2020 08:01:54 GMT+0100 (British Summer Time)2","tabIndex":0,"allGrids":[{"id":"Thu Jun 04 2020 08:01:54 GMT+0100 (British Summer Time)0","columnDefs":[{"field":"athlete"},{"field":"age"},{"field":"country"},{"field":"year"},{"field":"date"},{"field":"sport"},{"field":"gold"},{"field":"silver"},{"field":"bronze"},{"field":"total"}],"url":"https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json","sortModel":[],"fetchAgain":true,"name":"Tab 1"},{"id":"Thu Jun 04 2020 08:01:55 GMT+0100 (British Summer Time)3","columnDefs":[{"field":"athlete"},{"field":"age"},{"field":"country"},{"field":"year"},{"field":"date"},{"field":"sport"},{"field":"gold"},{"field":"silver"},{"field":"bronze"},{"field":"total"}],"url":"https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json","fetchAgain":true,"name":"Tab 2"}],"rowSelectionSyncStatus":"SYNC_DONE","name":"View A"},{"id":"Thu Jun 04 2020 08:01:56 GMT+0100 (British Summer Time)4","tabIndex":0,"allGrids":[{"id":"Thu Jun 04 2020 08:02:08 GMT+0100 (British Summer Time)5","columnDefs":[{"field":"athlete"},{"field":"age"},{"field":"country"},{"field":"year"},{"field":"date"},{"field":"sport"},{"field":"gold"},{"field":"silver"},{"field":"bronze"},{"field":"total"}],"url":"https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json","fetchAgain":true}],"rowSelectionSyncStatus":"SYNC_DONE","name":"View B"}]}';return JSON.parse(e)}());var oe=Object(d.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case f:return k(e,n);case v:return F(e,n);case h:return L(e,n);case p:return te(e,n);case b:return P(e,n);case m:return W(e,n);case w:return B(e,n);case g:return U(e);case S:return z(e,n);case j:return J(e,n);case O:return Y(e,n);case y:return H(e,n);case I:return K(e,n);case C:return X(e,n);case V:return q(e);case T:return Q(e);case N:return Z(e,n);case u:return $(e,n);case G:return ee(e,n);default:return e}}),ne,Object(s.composeWithDevTools)(Object(d.applyMiddleware)(ie.a)));var ce=n(19),le=n(20),de=n(22),se=n(21),ue=0;function fe(){return new Date+""+ue++}var ve={createNewView:function(){return function(e,t){var n=fe();e(ve.addNewView(n)),e(ve.changeView(n))}},createNewTab:function(e){return function(t,n){var i=null!==n().currentViewInfo;if(e.id=fe(),!i){var r=fe();t(ve.createNewView(r))}t(ve.addNewTab(e));var a=x(oe.getState()).length-1,o=oe.getState().currentViewInfo.id;t(ve.setTabIndex(a)),t(ve.fetchGridData(o,e.id,e.url))}},destroyView:function(e){return function(t,n){var i=n().currentViewInfo.id,r=i===e,a=1===n().allViews.length;if(t(ve.removeView(e)),a)t(ve.setCurrentViewInfoToNull());else if(!r||a)a||r||t(ve.changeView(i));else{var o=n().allViews,c=o[o.length-1];t(ve.changeView(c.id))}}},fetchGridData:function(e,t,n){return function(i){fetch(n).then((function(n){return n.json().then((function(n){i(ve.fetchGridDataSuccess(e,t,n))}))})).catch((function(e){i(ve.fetchGridDataFail(e))}))}},fetchGridDataSuccess:function(e,t,n){return function(i){i(ve.setGridData(e,t,n)),i(ve.setGridFetchAgainToFalse(e,t))}},fetchGridDataFail:function(e){new Error(e," <<<< FETCH GRID DATA FAIL")},changeTab:function(e){return function(t,n){var i=n(),r=i.currentViewInfo.index,a=i.allViews[r],o=i.currentViewInfo.id,c=a.allGrids[e],l=c.id,d=c.url,s=c.fetchAgain;t(ve.setTabIndex(e)),s&&t(ve.fetchGridData(o,l,d))}},destroyTab:function(e){return function(t,n){t({type:u,payload:e});var i=n().currentViewInfo.index,r=n().allViews[i],a=r.tabIndex,o=r.allGrids;if(!o[a]){var c=o.length-1;-1!==c&&t(ve.changeTab(c))}}},addNewView:function(e){return{type:f,payload:e}},changeTabName:function(e,t,n){return{type:m,payload:{viewId:e,gridId:t,newName:n}}},removeView:function(e){return{type:v,payload:e}},changeViewName:function(e,t){return{type:p,payload:{viewId:e,newName:t}}},changeView:function(e){return{type:h,payload:e}},addNewTab:function(e){return{type:b,payload:e}},setTabIndex:function(e){return{type:w,payload:e}},setCurrentViewInfoToNull:function(){return{type:g}},setGridData:function(e,t,n){return{type:S,payload:{viewId:e,gridId:t,newData:n}}},saveGridSortModel:function(e,t){return{type:j,payload:{gridId:e,sortModel:t}}},saveGridFilterModel:function(e,t){return{type:O,payload:{gridId:e,filterModel:t}}},saveGridColumnState:function(e,t){return{type:y,payload:{gridId:e,columnState:t}}},saveGridColumnGroupState:function(e,t){return{type:I,payload:{gridId:e,columnGroupState:t}}},saveGridPivotModeState:function(e,t){return{type:C,payload:{gridId:e,isPivotMode:t}}},saveStoreStateToLocalStorage:function(){return{type:V}},restoreStoreStateToLocalStorage:function(){return{type:T}},setGridFetchAgainToFalse:function(e,t){return{type:N,payload:{viewId:e,gridId:t}}},setRowSelectionSyncStatus:function(e,t){return{type:G,payload:{viewId:e,status:t}}}},pe=n(40),he=(n(65),n(95),n(26)),be=n(39),me=n(75),we=n.n(me),ge=n(126),Se=n(2),je=function(e){Object(de.a)(n,e);var t=Object(se.a)(n);function n(e){var i;return Object(ce.a)(this,n),(i=t.call(this,e)).props=e,i.state={viewName:i.props.data.viewName?i.props.data.viewName:"New View",styles:{backgroundColor:"rgba(0,0,0,0)"}},i.btnRef=r.a.createRef(),i.onDeleteView=i.onDeleteView.bind(Object(be.a)(i)),i}return Object(le.a)(n,[{key:"onDeleteView",value:function(e){document.activeElement.blur(),e.stopPropagation();var t=this.props.data.viewId;this.props.destroyView(t)}},{key:"componentDidMount",value:function(){this.btnRef.current.addEventListener("click",this.onDeleteView)}},{key:"componentWillUnmount",value:function(){this.btnRef.current.removeEventListener("click",this.onDeleteView)}},{key:"changeBackgroundColor",value:function(e){this.setState(Object(l.a)(Object(l.a)({},this.state),{},{styles:Object(l.a)(Object(l.a)({},this.state.styles),{},{backgroundColor:e})}))}},{key:"render",value:function(){var e=this;return Object(Se.jsxs)("div",{children:[Object(Se.jsx)(ge.a,{color:"primary",variant:"contained",onMouseEnter:function(){e.changeBackgroundColor("rgba(255,255,255,0.7)")},onMouseLeave:function(){e.changeBackgroundColor("rgba(0,0,0,0)")},style:{backgroundColor:this.state.styles.backgroundColor,marginRight:"10px"},ref:this.btnRef,"aria-label":"delete",children:Object(Se.jsx)(we.a,{color:"primary",fontSize:"small"})}),this.state.viewName]})}}]),n}(i.Component);he.LicenseManager.setLicenseKey("[TRIAL]_16_May_2020_[v2]_MTU4OTU4NzIwMDAwMA==b03f1f5b63303eabbc3b42a734fcc666");var Oe=function(e){Object(de.a)(n,e);var t=Object(se.a)(n);function n(e){var i;return Object(ce.a)(this,n),(i=t.call(this,e)).frameworkComponents={viewCellRenderer:je},i.columnDefs=[{field:"viewName",headerName:"Name",filter:!0,sortable:!0,flex:1,editable:!0,onCellValueChanged:function(e){i.props.actions.changeViewName(e.data.viewId,e.newValue)},valueGetter:function(e){return e.data.viewName?e.data.viewName:"New View"},cellRenderer:"viewCellRenderer",cellRendererParams:{destroyView:i.props.actions.destroyView}}],i}return Object(le.a)(n,[{key:"syncRowSelection",value:function(e){var t,n=this.props.currentViewInfo,i=null===(t=this.props.currentView)||void 0===t?void 0:t.rowSelectionSyncStatus,r=this.gridApi.getRowNode(null===n||void 0===n?void 0:n.id),a=null===r||void 0===r?void 0:r.selected;"SYNCING"===i||a||void 0===r||null===n||(this.props.actions.setRowSelectionSyncStatus(n.id,"SYNCING"),r.setSelected(!0),this.props.actions.setRowSelectionSyncStatus(n.id,"SYNC_DONE"))}},{key:"componentDidUpdate",value:function(e){this.syncRowSelection(e)}},{key:"onFirstDataRendered",value:function(e){var t,n,i=this.gridApi.getRowNode(null===(t=this.props)||void 0===t||null===(n=t.currentView)||void 0===n?void 0:n.id);i&&i.setSelected(!0)}},{key:"onRowSelected",value:function(e){var t;"SYNCING"!==(null===(t=this.props.currentView)||void 0===t?void 0:t.rowSelectionSyncStatus)&&(e.node.selected&&this.props.actions.changeView(e.node.id))}},{key:"onGridReady",value:function(e){this.gridApi=e.api,this.columnApi=e.columnApi}},{key:"render",value:function(){return this.rowData=this.props.allViews.map((function(e){return{viewId:e.id,viewName:e.name}})),Object(Se.jsx)("div",{className:"ag-theme-alpine  ".concat(this.props.className),children:Object(Se.jsx)(pe.AgGridReact,{overlayNoRowsTemplate:'<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;"> There are no views available. Add a new view</span>',rowSelection:"single",rowData:this.rowData,columnDefs:this.columnDefs,onGridReady:this.onGridReady.bind(this),onFirstDataRendered:this.onFirstDataRendered.bind(this),onRowSelected:this.onRowSelected.bind(this),frameworkComponents:this.frameworkComponents,getRowNodeId:function(e){return e.viewId},rowHeight:60,popupParent:document.body})})}}]),n}(r.a.PureComponent),ye=Object(c.b)((function(e){return{allViews:e.allViews,currentViewInfo:e.currentViewInfo,currentView:E(e)}}),(function(e){return{actions:Object(d.bindActionCreators)(ve,e)}}))(Oe),Ie=n(129),Ce=n(132),Ve=n(101),Te=n(36),Ne=n(49),Ge=n(128),De=n(76),xe=n.n(De),Ae=n(134),Ee=["classes","gridName","gridId","index"];function Me(e){var t=e.classes,n=e.gridName,r=void 0===n?"New Tab":n,a=e.gridId,o=e.index,d=Object(Ne.a)(e,Ee),s=Object(i.useState)(!1),u=Object(Te.a)(s,2),f=u[0],v=u[1],p=Object(i.useState)(r),h=Object(Te.a)(p,2),b=h[0],m=h[1],w=Object(c.d)((function(e){return e.currentViewInfo.id})),g=Object(c.c)();function S(){g(ve.changeTabName(w,a,b)),v(!1)}return Object(Se.jsx)(i.Fragment,{children:f?Object(Se.jsx)(Ge.a,Object(l.a)(Object(l.a)({},d),{},{component:"div",icon:Object(Se.jsx)(Ae.a,{onFocus:function(e){e.target.select()},defaultValue:b,onChange:function(e){m(e.target.value)},autoFocus:!0,onBlur:function(){S()},onKeyPress:function(e){"Enter"===e.key&&S()}})})):Object(Se.jsx)(Ge.a,Object(l.a)(Object(l.a)(Object(l.a)({},d),{},{classes:{wrapper:t.tabWrapper},component:"div",onDoubleClick:function(e){v(!0)},label:r},Re(o)),{},{icon:Object(Se.jsx)(ge.a,{container:"div",onClick:function(e){e.stopPropagation(),g(ve.destroyTab(o))},children:Object(Se.jsx)(xe.a,{})})}))})}var _e=r.a.memo(Me);function Re(e){return{id:"scrollable-force-tab-".concat(e),"aria-controls":"scrollable-force-tabpanel-".concat(e)}}function ke(e){var t=e.classes,n=Object(c.d)((function(e){return A(e)})),i=Object(c.d)((function(e){return x(e)})),r=Object(c.c)(),a=function(e,t){return e.map((function(e,n){return Object(Se.jsx)(_e,{gridName:e.name,gridId:e.id,index:n,classes:t},e.id)}))}(i,t);return Object(Se.jsx)(Ie.a,{className:"app-bar",position:"static",color:"default",children:Object(Se.jsx)(Ce.a,{value:n,onChange:function(e,t){r(ve.changeTab(t))},variant:"scrollable",scrollButtons:"on",indicatorColor:"primary",textColor:"primary","aria-label":"scrollable force tabs example",children:a})})}var Fe=Object(Ve.a)((function(e){return{tabWrapper:{flexDirection:"row-reverse !important"},closeIconBtn:{color:"red !important",margin:"0px !important"},tabsFlexContainer:{height:"100%"}}}))(r.a.memo(ke));function Le(e,t,n){var i;return function(){var r=this,a=arguments,o=function(){i=null,n||e.apply(r,a)},c=n&&!i;clearTimeout(i),i=setTimeout(o,t),c&&e.apply(r,a)}}n(98);he.LicenseManager.setLicenseKey("[TRIAL]_16_May_2020_[v2]_MTU4OTU4NzIwMDAwMA==b03f1f5b63303eabbc3b42a734fcc666");var Pe=function(e){Object(de.a)(n,e);var t=Object(se.a)(n);function n(e){var i;return Object(ce.a)(this,n),(i=t.call(this,e)).defaultColDef={sortable:!0,filter:!0,resizable:!0,enableValue:!0,enablePivot:!0,enableRowGroup:!0},i.debounceSaveGridColumnState=Le((function(e,t){i.props.actions.saveGridColumnState(e,t)}),100),i.debounceSaveGridColumnGroupState=Le((function(e,t){i.props.actions.saveGridColumnGroupState(e,t)}),100),i.debounceSaveGridPivotModeState=Le((function(e,t){i.props.actions.saveGridPivotModeState(e,t)}),100),i}return Object(le.a)(n,[{key:"onGridReady",value:function(e){this.gridApi=e.api,this.gridColumnApi=e.columnApi;var t=this.props.currentViewInfo.id,n=this.props.id,i=this.props.url;this.props.fetchAgain&&this.props.actions.fetchGridData(t,n,i)}},{key:"onFilterChanged",value:function(e){var t=e.api.getFilterModel();this.props.actions.saveGridFilterModel(this.props.id,t)}},{key:"onSortChanged",value:function(e){var t=e.api.getSortModel();this.props.actions.saveGridSortModel(this.props.id,t)}},{key:"onFirstDataRendered",value:function(e){var t,n,i,r,a,o,c,l,d=null===(t=this.props)||void 0===t?void 0:t.isPivotMode,s=(null===(n=this.gridColumnApi)||void 0===n?void 0:n.isPivotMode())!==(null===this||void 0===this||null===(i=this.props)||void 0===i?void 0:i.isPivotMode),u=null===(r=this.props)||void 0===r?void 0:r.sortModel,f=null===(a=this.props)||void 0===a?void 0:a.filterModel,v=null===(o=this.props)||void 0===o?void 0:o.columnState,p=null===(c=this.props)||void 0===c?void 0:c.columnGroupState;void 0!==(null===this||void 0===this||null===(l=this.props)||void 0===l?void 0:l.isPivotMode)&&s&&this.gridColumnApi.setPivotMode(d),v&&this.gridColumnApi.setColumnState(v),p&&this.gridColumnApi.setColumnGroupState(p),u&&this.gridApi.setSortModel(u),f&&this.gridApi.setFilterModel(f)}},{key:"onSaveGridColumnState",value:function(e){var t,n;if(this.gridColumnApi){var i=null===(t=this.gridColumnApi)||void 0===t?void 0:t.getColumnState(),r=null===(n=this.gridColumnApi)||void 0===n?void 0:n.getColumnGroupState();this.debounceSaveGridColumnState(this.props.id,i),this.debounceSaveGridColumnGroupState(this.props.id,r)}}},{key:"onSavePivotModeState",value:function(){var e=this.gridColumnApi.isPivotMode();this.gridColumnApi.isPivotMode()!==this.props.isPivotMode&&this.debounceSaveGridPivotModeState(this.props.id,e)}},{key:"render",value:function(){return Object(Se.jsx)("div",{style:{height:"100%",zIndex:1e3},className:"ag-theme-alpine-dark ".concat(this.props.className),children:Object(Se.jsx)(pe.AgGridReact,{columnDefs:this.props.columnDefs,rowData:this.props.rowData,defaultColDef:this.defaultColDef,sideBar:!0,onFirstDataRendered:this.onFirstDataRendered.bind(this),onGridReady:this.onGridReady.bind(this),onFilterChanged:this.onFilterChanged.bind(this),onSortChanged:this.onSortChanged.bind(this),onColumnVisible:this.onSaveGridColumnState.bind(this),onColumnPinned:this.onSaveGridColumnState.bind(this),onColumnResized:this.onSaveGridColumnState.bind(this),onColumnMoved:this.onSaveGridColumnState.bind(this),onColumnRowGroupChanged:this.onSaveGridColumnState.bind(this),onColumnValueChanged:this.onSaveGridColumnState.bind(this),onColumnPivotChanged:this.onSaveGridColumnState.bind(this),onColumnPivotModeChanged:this.onSavePivotModeState.bind(this)})})}}]),n}(i.Component),We=Object(c.b)((function(e){return{currentViewInfo:e.currentViewInfo}}),(function(e){return{actions:Object(d.bindActionCreators)(ve,e)}}))(Pe),Be=["value","index","children"],Ue=function(e){var t=e.value,n=e.index,i=e.children,r=Object(Ne.a)(e,Be);return Object(Se.jsx)("div",Object(l.a)(Object(l.a)({role:"tabpanel",hidden:t!==n,id:"scrollable-force-tabpanel-".concat(n),"aria-labelledby":"scrollable-force-tab-".concat(n)},r),{},{children:t===n&&Object(Se.jsxs)(Se.Fragment,{children:[" ",i," "]})}))},ze=r.a.memo(Ue,Je);function Je(e,t){return e.value===t.value&&e.index===t.index&&e.children.props.rowData===t.children.props.rowData}function Ye(e){var t=Object(c.d)((function(e){return x(e)})),n=Object(c.d)((function(e){return A(e)})),i=t.map((function(e,t){return Object(Se.jsx)(ze,{className:"tabs-panel",value:n,index:t,children:Object(Se.jsx)(We,Object(l.a)({},e))},e.id)}));return Object(Se.jsx)(Se.Fragment,{children:i})}var He=r.a.memo(Ye),Ke=function(e){return Object(Se.jsxs)("div",{className:e.className,children:[Object(Se.jsx)(Fe,{}),Object(Se.jsx)(He,{})]})},Xe=r.a.memo(Ke),qe=n(130),Qe=[{field:"athlete"},{field:"age"},{field:"country"},{field:"year"},{field:"date"},{field:"sport"},{field:"gold"},{field:"silver"},{field:"bronze"},{field:"total"}];var Ze=n(133),$e=n(135);function et(e){return Object(Se.jsx)($e.a,Object(l.a)({elevation:6,variant:"filled"},e))}function tt(){var e=Object(c.c)(),t=r.a.useState(!1),n=Object(Te.a)(t,2),i=n[0],a=n[1],o=function(e,t){"clickaway"!==t&&a(!1)};return Object(Se.jsxs)("div",{children:[Object(Se.jsx)(qe.a,{onClick:function(){e(ve.saveStoreStateToLocalStorage()),a(!0)},className:"action-btn",variant:"outlined",color:"primary",size:"large",children:"SAVE STATE TO LOCAL STORAGE"}),Object(Se.jsx)(Ze.a,{anchorOrigin:{vertical:"top",horizontal:"left"},open:i,autoHideDuration:1500,onClose:o,children:Object(Se.jsx)(et,{onClose:o,severity:"success",children:"State saved to local storage!"})})]})}function nt(e){var t=Object(c.c)();function n(){var e={url:"https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json",columnDefs:Qe};t(ve.createNewTab(e))}return Object(Se.jsxs)("div",{className:"action-btn-container",children:[Object(Se.jsx)(qe.a,{className:"action-btn",onClick:function(){return t(ve.createNewView())},variant:"outlined",color:"primary",size:"large",children:"ADD NEW VIEW"}),Object(Se.jsx)(qe.a,{className:"action-btn",onClick:function(){return n()},variant:"outlined",color:"primary",size:"large",children:"ADD NEW TAB"}),Object(Se.jsx)(tt,{}),Object(Se.jsx)(qe.a,{onClick:function(){return localStorage.clear()},className:"action-btn",variant:"outlined",color:"primary",size:"large",children:"CLEAR LOCAL STORAGE"})]})}var it=r.a.memo(nt),rt=function(e){Object(de.a)(n,e);var t=Object(se.a)(n);function n(){return Object(ce.a)(this,n),t.apply(this,arguments)}return Object(le.a)(n,[{key:"render",value:function(){return Object(Se.jsxs)("div",{className:"main-container",children:[Object(Se.jsx)(it,{}),Object(Se.jsxs)("div",{className:"flex-container",children:[Object(Se.jsx)(ye,{className:"all-views"}),Object(Se.jsx)(Xe,{className:"tabs-view"})]})]})}}]),n}(i.Component),at=Object(c.b)((function(e){return{allViews:e.allViews,currentViewInfo:e.currentViewInfo,currentViewTabIndex:A(e)}}),(function(e){return{actions:Object(d.bindActionCreators)(ve,e)}}))(rt),ot=n(131),ct=n(77),lt=Object(ct.a)({});o.a.render(Object(Se.jsx)(c.a,{store:oe,children:Object(Se.jsx)(ot.a,{theme:lt,children:Object(Se.jsx)(at,{})})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.895a25f4.chunk.js.map