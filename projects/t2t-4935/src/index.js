import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import * as agGrid from "ag-grid-community";
import "ag-grid-enterprise";

var gridOptions = {
  columnDefs: [
    { field: 'athlete', minWidth: 150 },
    { field: 'age', maxWidth: 90 },
    { field: 'country', minWidth: 150 },
    { field: 'year', maxWidth: 90 },
    { field: 'date', minWidth: 150 },
    { field: 'sport', minWidth: 150 },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ],
  defaultColDef: {
    flex: 1,
    minWidth: 100,
  },
  enableRangeSelection: true,
};

var gridDiv = document.querySelector('#myGrid');
new agGrid.Grid(gridDiv, gridOptions);

agGrid
  .simpleHttpRequest({
    url: 'https://www.ag-grid.com/example-assets/olympic-winners.json',
  })
  .then(function (data) {
    gridOptions.api.setRowData(data);
  });
