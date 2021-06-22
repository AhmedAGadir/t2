import React from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../reducers/gridActions";

import { LicenseManager } from "ag-grid-enterprise";
import { getCurrentView } from "../../reducers/selectors";
import ViewCellRenderer from "./ViewCellRenderer";

LicenseManager.setLicenseKey(
  "[TRIAL]_16_May_2020_[v2]_MTU4OTU4NzIwMDAwMA==b03f1f5b63303eabbc3b42a734fcc666"
);

class AllViews extends React.PureComponent {
  constructor(props) {
    super(props);

    this.frameworkComponents = {
      viewCellRenderer: ViewCellRenderer,
    };

    this.columnDefs = [
      {
        field: "viewName",
        headerName: "Name",
        filter: true,
        sortable: true,
        flex: 1,
        editable: true,
        onCellValueChanged: (params) => {
          this.props.actions.changeViewName(
            params.data.viewId,
            params.newValue
          );
        },
        valueGetter: (params) =>
          params.data.viewName ? params.data.viewName : "New View",
        cellRenderer: "viewCellRenderer",
        cellRendererParams: {
          destroyView: this.props.actions.destroyView,
        },
      },
    ];
  }

  syncRowSelection(prevProps) {
    // Only SYNC ROW SELECTION WHEN NOT CURRENTLY ALREADY SYNCING
    let currentViewInfo = this.props.currentViewInfo;

    let syncStatus = this.props.currentView?.rowSelectionSyncStatus;
    let nodeToSelect = this.gridApi.getRowNode(currentViewInfo?.id);
    let isAlreadySelected = nodeToSelect?.selected;

    if (
      syncStatus === "SYNCING" ||
      isAlreadySelected ||
      nodeToSelect === undefined ||
      currentViewInfo === null
    )
      return;

    this.props.actions.setRowSelectionSyncStatus(currentViewInfo.id, "SYNCING");

    nodeToSelect.setSelected(true);

    this.props.actions.setRowSelectionSyncStatus(
      currentViewInfo.id,
      "SYNC_DONE"
    );
  }

  componentDidUpdate(prevProps) {
    this.syncRowSelection(prevProps);
  }

  onFirstDataRendered(params) {
    let nodeToSelect = this.gridApi.getRowNode(this.props?.currentView?.id);
    if (nodeToSelect) nodeToSelect.setSelected(true);
  }

  onRowSelected(params) {
    // when state is syncing do nothing
    if (this.props.currentView?.rowSelectionSyncStatus === "SYNCING") return;

    // isSelectedNode makes sure to only pick the currently selected grid node, this is because rowSelected gets also triggered for deSelection
    let isSelectedNode = params.node.selected;
    if (isSelectedNode) this.props.actions.changeView(params.node.id);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }

  render() {
    this.rowData = this.props.allViews.map((view) => {
      return {
        viewId: view.id,
        viewName: view.name,
      };
    });

    return (
      <div className={`ag-theme-alpine  ${this.props.className}`}>
        <AgGridReact
          overlayNoRowsTemplate={
            '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;"> There are no views available. Add a new view</span>'
          }
          rowSelection="single"
          rowData={this.rowData}
          columnDefs={this.columnDefs}
          onGridReady={this.onGridReady.bind(this)}
          onFirstDataRendered={this.onFirstDataRendered.bind(this)}
          onRowSelected={this.onRowSelected.bind(this)}
          frameworkComponents={this.frameworkComponents}
          getRowNodeId={(node) => node.viewId}
          rowHeight={60}
          popupParent={document.body}
        ></AgGridReact>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allViews: state.allViews,
  currentViewInfo: state.currentViewInfo,
  currentView: getCurrentView(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllViews);
