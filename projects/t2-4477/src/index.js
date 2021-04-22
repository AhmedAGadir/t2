'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { columnDefs, defaultColDef, data } from './deps.js'

class GridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowData: null,
      pinnedBottomRowData: [],
    };
  }

  componentDidMount() {
    this.setState({ rowData: data });
    this.updatePinnedRow(data);
  }

  updatePinnedRow = (data) => {
    if (data && data.length > 0) {
      let { assets = 0, current = 0, newValue = 0, optimal = 0, agreed = 0 } = {};
      data.forEach(list => {
        current += (list.current) ? Number(list.current) : 0;
        newValue += (list.newValue) ? Number(list.newValue) : 0;
        optimal += (list.optimal) ? Number(list.optimal) : 0;
        agreed += (list.agreed) ? Number(list.agreed) : 0;
        if (list.fundName !== "cash") {
          assets += 1;
        }
      });
      const pinnedBottomRowData = [{
        fundName: `Total (${assets} Assets):`,
        isNonEditable: true,
        current, newValue, optimal, agreed
      }];
      this.setState({ pinnedBottomRowData }, () => {
        if (this.gridApi) {
          this.gridApi.setPinnedBottomRowData(pinnedBottomRowData);
        }
      });
    }
  }

  onGridReady = params => {
    if (params) {
      this.gridApi = params.api;
      this.gridApi.sizeColumnsToFit();
    }
  };

  cellEditingStarted = (params) => {
    if (params.data.isNonEditable && this.gridApi) {
      this.gridApi.stopEditing(true);
    }
  }

  onCellValueChanged = () => {
    const rowdata = [];
    this.gridApi.forEachNode((rowNode) => {
      rowdata.push({ ...rowNode.data });
    });
    this.updatePinnedRow(rowdata);
  }

  render() {
    const { pinnedBottomRowData } = this.state;
    const attributes = {
      domLayout: "autoHeight",
      rowSelection: 'multiple',
      floatingFilter: false,
      enableRangeSelection: true,
      stopEditingWhenGridLosesFocus: true,
      singleClickEdit: true,
      suppressContextMenu: true,
      suppressExcelExport: true,
      isRowSelectable: (rowNode) => {
        return rowNode.data.fundName !== 'Cash';
      },
    };

    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div
          id="myGrid"
          style={{
            height: '100%',
            width: '100%',
          }}
          className="ag-theme-alpine"
        >
          <AgGridReact
            {...attributes}
            rowData={data}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            pinnedBottomRowData={pinnedBottomRowData}
            onGridReady={this.onGridReady}
            onCellEditingStarted={this.cellEditingStarted}
            onCellValueChanged={this.onCellValueChanged}
          />
        </div>
      </div>
    );
  }
}

render(<GridExample></GridExample>, document.querySelector('#root'));
