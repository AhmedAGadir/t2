import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          field: 'athlete',
          minWidth: 150,
        },
        {
          field: 'age',
          maxWidth: 90,
        },
        {
          field: 'country',
          minWidth: 150,
        },
        {
          field: 'year',
          maxWidth: 90,
        },
        {
          field: 'date',
          minWidth: 150,
        },
        {
          field: 'sport',
          minWidth: 150,
        },
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
        { field: 'total' },
      ],
      defaultColDef: {
        flex: 1,
        minWidth: 100,
      },
      rowData: null,
    };
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const httpRequest = new XMLHttpRequest();
    const updateData = (data) => {
      this.setState({ rowData: data });
    };

    httpRequest.open(
      'GET',
      'https://www.ag-grid.com/example-assets/olympic-winners.json'
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  };

  render() {
    return (
      <div style={{ width: '90%', height: '500px', margin: 'auto', marginTop: "100px" }}>
        <div
          id="myGrid"
          style={{
            height: '100%',
            width: '100%',
          }}
          className="ag-theme-alpine"
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            enableRangeSelection={true}
            onGridReady={this.onGridReady}
            rowData={this.state.rowData}
          />
        </div>
      </div>
    );
  }
}
