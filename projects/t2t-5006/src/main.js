import Vue from 'vue';
import { AgGridVue } from 'ag-grid-vue';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import SimpleCellRenderer from './SimpleCellRendererVue.js';

const VueExample = {
  template: `
        <div style="height: 100%">
            <div class="example-wrapper">
                <div style="margin-bottom: 5px;">
                    <input type="text" id="filter-text-box" placeholder="Filter..." v-on:input="onFilterTextBoxChanged()">
                </div>
                <ag-grid-vue
                style="width: 100%; height: 100%;"
                class="ag-theme-alpine"
                id="myGrid"
                :gridOptions="gridOptions"
                @grid-ready="onGridReady"
                :rowData="rowData"
                :columnDefs="columnDefs"
                :defaultColDef="defaultColDef"
                :autoGroupColumnDef="autoGroupColumnDef"
                :frameworkComponents="frameworkComponents"
                :treeData="true"
                :animateRows="true"
                :groupDefaultExpanded="groupDefaultExpanded"
                :getDataPath="getDataPath"></ag-grid-vue>
            </div>
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
      rowData: null,
      columnDefs: null,
      defaultColDef: null,
      autoGroupColumnDef: null,
      groupDefaultExpanded: null,
      getDataPath: null,
    };
  },
  beforeMount() {
    this.gridOptions = {};
    this.rowData = [
      {
        orgHierarchy: ['Erica Rogers'],
        jobTitle: 'CEO',
        employmentType: 'Permanent',
      },
      {
        orgHierarchy: ['Erica Rogers', 'Malcolm Barrett'],
        jobTitle: 'Exec. Vice President',
        employmentType: 'Permanent',
      },
      {
        orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker'],
        jobTitle: 'Director of Operations',
        employmentType: 'Permanent',
      },
      {
        orgHierarchy: [
          'Erica Rogers',
          'Malcolm Barrett',
          'Esther Baker',
          'Brittany Hanson',
        ],
        jobTitle: 'Fleet Coordinator',
        employmentType: 'Permanent',
      },
      {
        orgHierarchy: [
          'Erica Rogers',
          'Malcolm Barrett',
          'Esther Baker',
          'Brittany Hanson',
          'Leah Flowers',
        ],
        jobTitle: 'Parts Technician',
        employmentType: 'Contract',
      },
      {
        orgHierarchy: [
          'Erica Rogers',
          'Malcolm Barrett',
          'Esther Baker',
          'Brittany Hanson',
          'Tammy Sutton',
        ],
        jobTitle: 'Service Technician',
        employmentType: 'Contract',
      },
      {
        orgHierarchy: [
          'Erica Rogers',
          'Malcolm Barrett',
          'Esther Baker',
          'Derek Paul',
        ],
        jobTitle: 'Inventory Control',
        employmentType: 'Permanent',
      },
      {
        orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland'],
        jobTitle: 'VP Sales',
        employmentType: 'Permanent',
      },
      {
        orgHierarchy: [
          'Erica Rogers',
          'Malcolm Barrett',
          'Francis Strickland',
          'Morris Hanson',
        ],
        jobTitle: 'Sales Manager',
        employmentType: 'Permanent',
      },
      {
        orgHierarchy: [
          'Erica Rogers',
          'Malcolm Barrett',
          'Francis Strickland',
          'Todd Tyler',
        ],
        jobTitle: 'Sales Executive',
        employmentType: 'Contract',
      },
      {
        orgHierarchy: [
          'Erica Rogers',
          'Malcolm Barrett',
          'Francis Strickland',
          'Bennie Wise',
        ],
        jobTitle: 'Sales Executive',
        employmentType: 'Contract',
      },
      {
        orgHierarchy: [
          'Erica Rogers',
          'Malcolm Barrett',
          'Francis Strickland',
          'Joel Cooper',
        ],
        jobTitle: 'Sales Executive',
        employmentType: 'Permanent',
      },
    ];
    this.columnDefs = [{ field: 'jobTitle' }, { field: 'employmentType' }];
    this.frameworkComponents = { simpleCellRenderer: SimpleCellRenderer };
    this.defaultColDef = { flex: 1 };
    this.autoGroupColumnDef = {
      headerName: 'Organisation Hierarchy',
      minWidth: 300,
      cellRendererParams: { suppressCount: true, innerRenderer: 'simpleCellRenderer' },
    };
    this.groupDefaultExpanded = -1;
    this.getDataPath = (data) => {
      return data.orgHierarchy;
    };
  },
  mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  },
  methods: {
    onFilterTextBoxChanged() {
      this.gridApi.setQuickFilter(
        document.getElementById('filter-text-box').value
      );
    },
    onGridReady(params) {},
  },
};

new Vue({
  el: '#app',
  components: {
    'my-component': VueExample,
  },
});
