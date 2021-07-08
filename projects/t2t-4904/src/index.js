import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import * as agGrid from "ag-grid-community";


var athleteArr = []
var gridOptions = {
  columnDefs: [
    { field: 'athlete', minWidth: 220, filter: true },
    { field: 'country', minWidth: 200 },
    { field: 'year' },
    { field: 'sport', minWidth: 200 },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
  ],

  defaultColDef: {
    flex: 1,
    minWidth: 100
  },

  rowModelType: 'serverSide',
  serverSideStoreType: 'full',
};

  var gridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(gridDiv, gridOptions);

  agGrid
    .simpleHttpRequest({
      url: 'https://www.ag-grid.com/example-assets/olympic-winners.json',
    })
    .then(function (data) {
      // setup the fake server with entire dataset
      var fakeServer = createFakeServer(data);

      // create datasource with a reference to the fake server
      var datasource = createServerSideDatasource(fakeServer);

      // register the datasource with the grid
      gridOptions.api.setServerSideDatasource(datasource);
    });

function createServerSideDatasource(server) {
  return {
    getRows: function (params) {
      console.log(
        '[Datasource] - rows requested by grid: startRow = ' +
          params.request.startRow +
          ', endRow = ' +
          params.request.endRow
      );

      // get data for request from our fake server
      var response = server.getData(params.request);

      // simulating real server call with a 500ms delay
      setTimeout(function () {
        if (response.success) {

      //adding values to the set filter
      athleteArr = response.rows.map(row=>row.athlete)
      let currentDefs = gridOptions.api.getColumnDefs()
      let indexOfAthlete = currentDefs.findIndex((col)=>col.colId==='athlete')
      currentDefs[indexOfAthlete]= {...currentDefs[indexOfAthlete], filterParams:{values:athleteArr}}
      gridOptions.api.setColumnDefs(currentDefs)
          // supply rows for requested block to grid
          params.success({
            rowData: response.rows,
            rowCount: response.lastRow,
          });
        } else {
          params.fail();
        }
      }, 1000);
    },
  };
}

function createFakeServer(allData) {
  return {
    getData: function (request) {
      // in this simplified fake server all rows are contained in an array
      var requestedRows = allData.slice(request.startRow, request.endRow);

      // here we are pretending we don't know the last row until we reach it!
      var lastRow = allData.length-1

      return {
        success: true,
        rows: requestedRows,
        lastRow: lastRow,
      };
    },
  };
}
