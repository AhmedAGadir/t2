import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import * as agGrid from "ag-grid-community";
import {CustomTooltip} from "./customTooltip";

var gridOptions = {
  columnDefs: [
    { field: 'athlete', minWidth: 150, tooltipField: 'athlete', tooltipComponent: 'customTooltip' },
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
  components: {
    customTooltip: CustomTooltip,
  },
};

  var gridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(gridDiv, gridOptions);

  agGrid
    .simpleHttpRequest({
      url: 'https://www.ag-grid.com/example-assets/olympic-winners.json',
    })
    .then(function (data) {
      data = data.slice(0, 1)
      data[0] = {...data[0], athlete: `MANU'SHR...K""SH&`}
      gridOptions.api.setRowData(data);
    });
