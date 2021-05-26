import Vue from 'vue';
import { AgGridVue } from 'ag-grid-vue';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const VueExample = {
  template: `
        <div style="height: 100%">
            <ag-grid-vue
                style="width: 100%; height: 100%;"
                class="ag-theme-alpine"
                id="myGrid"
                :gridOptions="gridOptions"
                @grid-ready="onGridReady"
                :columnDefs="columnDefs"
                :defaultColDef="defaultColDef"
                :autoGroupColumnDef="autoGroupColumnDef"
                :enableRangeSelection="true"
                :animateRows="true"
                :rowData="rowData"></ag-grid-vue>
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
      autoGroupColumnDef: null,
      rowData: null,
    };
  },
  beforeMount() {
    this.gridOptions = {};
    this.columnDefs = [
      {
        field: 'country',
        rowGroup: true,
      },
      {
        field: 'year',
        rowGroup: true,
      },
      { field: 'sport' },
      { field: 'athlete' },
      { field: 'total' },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
      filter: true,
      sortable: true,
      resizable: true,
    };
    this.autoGroupColumnDef = { minWidth: 200 };
  },
  mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  },
  methods: {
    onGridReady(params) {
      const updateData = (data) => {
        this.rowData = data;
      };

      fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        .then((resp) => resp.json())
        .then((data) => updateData(data));
    },
  },
};

new Vue({
  el: '#app',
  components: {
    'my-component': VueExample,
  },
});
