'use strict';

import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import * as agGrid from 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

agGrid.LicenseManager.setLicenseKey('License key goes here')

const GridExample = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    const updateData = (data) => {
      var server = new FakeServer(data);
      var datasource = new ServerSideDatasource(server);
      params.api.setServerSideDatasource(datasource);
    };

    fetch('https://www.ag-grid.com/example-assets/call-data.json')
      .then((resp) => resp.json())
      .then((data) => updateData(data));

    setTimeout(function () {
      var someRow = params.api.getRowNode('1');
      if (someRow) {
        someRow.setExpanded(true);
      }
    }, 1000);
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ height: '100%', boxSizing: 'border-box' }}>
        <div
          id="myGrid"
          style={{
            height: '100%',
            width: '100%',
          }}
          className="ag-theme-alpine-dark"
        >
          <AgGridReact
            defaultColDef={{ flex: 1 }}
            animateRows={true}
            rowModelType={'serverSide'}
            serverSideStoreType={'partial'}
            masterDetail={true}
            detailCellRendererParams={{
              detailGridOptions: {
                columnDefs: [
                  { field: 'callId' },
                  { field: 'direction' },
                  {
                    field: 'duration',
                    valueFormatter: "x.toLocaleString() + 's'",
                  },
                  {
                    field: 'switchCode',
                    minWidth: 150,
                  },
                  {
                    field: 'number',
                    minWidth: 180,
                  },
                ],
                defaultColDef: { flex: 1 },
              },
              getDetailRowData: function (params) {
                params.successCallback(params.data.callRecords);
              },
            }}
            onGridReady={onGridReady}
          >
            <AgGridColumn
              field="accountId"
              cellRenderer="agGroupCellRenderer"
            />
            <AgGridColumn field="name" />
            <AgGridColumn field="country" />
            <AgGridColumn field="calls" />
            <AgGridColumn field="totalDuration" />
          </AgGridReact>
        </div>
      </div>
    </div>
  );
};

function ServerSideDatasource(server) {
  return {
    getRows: function (params) {
      setTimeout(function () {
        var response = server.getResponse(params.request);
        if (response.success) {
          params.success({
            rowData: response.rows,
            rowCount: response.lastRow,
          });
        } else {
          params.fail();
        }
      }, 500);
    },
  };
}
function FakeServer(allData) {
  return {
    getResponse: function (request) {
      console.log(
        'asking for rows: ' + request.startRow + ' to ' + request.endRow
      );
      var rowsThisPage = allData.slice(request.startRow, request.endRow);
      var lastRow = allData.length;
      return {
        success: true,
        rows: rowsThisPage,
        lastRow: lastRow,
      };
    },
  };
}

render(<GridExample></GridExample>, document.querySelector('#root'));
