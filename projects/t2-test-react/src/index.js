'use strict';

import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './styles.css'

const GridExample = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    const updateData = (data) => {
      setRowData(data);
    };

    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => updateData(data));
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
          defaultColDef={{
            flex: 1,
            minWidth: 100,
            filter: true,
            sortable: true,
            resizable: true,
          }}
          autoGroupColumnDef={{ minWidth: 200 }}
          enableRangeSelection={true}
          animateRows={true}
          onGridReady={onGridReady}
          rowData={rowData}
        >
          <AgGridColumn field="country" rowGroup={true} />
          <AgGridColumn field="year" rowGroup={true} />
          <AgGridColumn field="sport" />
          <AgGridColumn field="athlete" />
          <AgGridColumn field="total" />
        </AgGridReact>
      </div>
    </div>
  );
};

render(<GridExample></GridExample>, document.querySelector('#root'));
