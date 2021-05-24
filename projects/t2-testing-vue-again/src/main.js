import Vue from 'vue';
import { AgGridVue } from 'ag-grid-vue';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

const VueExample = {
  template: `
        <div style="height: 100%">
            <ag-grid-vue
                style="width: 100%; height: 100%;"
                class="ag-theme-alpine-dark"
                id="myGrid"
                :gridOptions="gridOptions"
                @grid-ready="onGridReady"
                :columnDefs="columnDefs"
                :defaultColDef="defaultColDef"
                :rowModelType="rowModelType"></ag-grid-vue>
        </div>
    `,
  components: {
    'ag-grid-vue': AgGridVue,
  },
  data: function () {
    return {
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      columnDefs: null,
      defaultColDef: null,
      rowModelType: null,
    };
  },
  beforeMount() {
    this.gridOptions = {};
    this.columnDefs = [
      {
        field: 'athlete',
        minWidth: 220,
      },
      {
        field: 'country',
        minWidth: 200,
      },
      { field: 'year' },
      {
        field: 'sport',
        minWidth: 200,
      },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
    };
    this.rowModelType = 'serverSide';
  },
  mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  },
  methods: {
    onGridReady(params) {
      const updateData = (data) => {
        var fakeServer = window.createFakeServer(data);
        var datasource = window.createServerSideDatasource(fakeServer);
        params.api.setServerSideDatasource(datasource);
      };

      fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        .then((resp) => resp.json())
        .then((data) => updateData(data));
    },
  },
};

window.createServerSideDatasource = function createServerSideDatasource(
  server
) {
  return {
    getRows: function (params) {
      console.log('[Datasource] - rows requested by grid: ', params.request);
      var response = server.getData(params.request);
      setTimeout(function () {
        if (response.success) {
          params.success({ rowData: response.rows });
        } else {
          params.fail();
        }
      }, 500);
    },
  };
};

window.createFakeServer = function createFakeServer(allData) {
  return {
    getData: function (request) {
      console.log('request', request);
      var requestedRows = allData.slice();
      return {
        success: true,
        rows: requestedRows,
      };
    },
  };
};

new Vue({
  el: '#app',
  components: {
    'my-component': VueExample,
  },
});
