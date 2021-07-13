import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import * as agGrid from "ag-grid-community";

var gridOptions = {
  columnDefs: [
    { field: 'athlete', minWidth: 150, wrapText: true, autoHeight: true, cellEditor: 'agLargeTextCellEditor' },
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
  undoRedoCellEditing: true,
  defaultColDef: {
    flex: 1,
    minWidth: 100,
    editable: true
  },
  onCellEditingStopped: (params)=>{
    params.api.resetRowHeights()
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
