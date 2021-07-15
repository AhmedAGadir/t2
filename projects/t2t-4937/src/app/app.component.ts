import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private gridApi;
  private gridColumnApi;

   columnDefs;
   defaultColDef;
   autoGroupColumnDef;
   rowData: any[];
  rowStyle: any;
  rowClassRules: any;
  getRowStyle: any;
  isGroupOpenByDefault: true;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        field: 'contentset',
        rowGroup: true,
        flex: 1,
      },
      {
        field: 'contentsetItem',
        rowGroup: true,
        flex: 1,
        suppressSizeToFit: true,
      },
      { field: 'group', pivot: true },
      { field: 'factName', pivot: true },
      {
        headerName: 'Value',
        field: 'entityFamily',
        flex: 1,

        valueFormatter: (params) => {
          if (params.node.field === 'contentsetItem') {
            let childrenValues: any[] = [];
            let pivotKeys = params.colDef.pivotKeys;
            params.node.allLeafChildren.forEach((child) => {
              if (pivotKeys.includes(child.data.factName)) {
                childrenValues.push(child.data.value);
              }
            });
            let result = childrenValues.filter((val) => val !== '').join(', ')

            return result ? result : 'N/A'
          }
          return params.value ? params.value : 'N/A'
        },
        aggFunc: (params) => {
          return params.values.filter((val) => val !== '').join(', ');
        },
      },
    ];
    this.defaultColDef = {
      filter: true,
      resizable: true
    };
    this.autoGroupColumnDef = {
      minWidth: 140,
      cellRendererParams: {
        suppressCount: true,
      },
    };
    this.getRowStyle = (params) => {
      if (params.node.key === 'All Items') {
        return { background: '#e9fce9' };
      }
      return
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.expandAll();
    this.gridApi.sizeColumnsToFit();
    let data = [
      {
        contentsetItem: 'All Items',
        group: 'Usage',
        value: '',
        entityFamily: 'Abc',
        entityFamilyCount: '0',
        entityCount: '0',
        itemCount: '649',
        contentset: 'Flipkart',
        factName: 'Allowed Product',
      },
      {
        contentsetItem: 'All Items',
        group: 'Usage',
        value: '',
        entityFamily: '123',
        entityFamilyCount: '0',
        entityCount: '0',
        itemCount: '649',
        contentset: 'Flipkart',
        factName: 'Allowed Product',
      },
      {
        contentsetItem: 'All Items',
        group: 'Audit & Reporting Requirements',
        value: '2',
        entityFamily: '123',
        entityFamilyCount: '0',
        entityCount: '0',
        itemCount: '1721',
        contentset: 'Flipkart',
        factName: 'No of reports',
      },
      {
        contentsetItem: 'Myntra',
        group: 'Usage',
        value: 'Colthing Company',
        entityFamily: 'Walmart',
        entityFamilyCount: '0',
        entityCount: '0',
        itemCount: '1',
        contentset: 'Flipkart',
        factName: 'Allowed Product',
      },
      {
        contentsetItem: 'All Items',
        group: 'Audit & Reporting Requirements',
        value: '2',
        entityFamily: '456',
        entityFamilyCount: '0',
        entityCount: '0',
        itemCount: '1721',
        contentset: 'Amazon',
        factName: 'No of reports',
      },
      {
        contentsetItem: 'All Items',
        group: 'Usage',
        value: '',
        entityFamily: 'xyz',
        entityFamilyCount: '0',
        entityCount: '0',
        itemCount: '1721',
        contentset: 'Amazon',
        factName: 'Allowed Product',
      },
      {
        contentsetItem: 'All Items',
        group: 'Usage',
        value: '',
        entityFamily: '789',
        entityFamilyCount: '0',
        entityCount: '0',
        itemCount: '1721',
        contentset: 'Amazon',
        factName: 'Allowed Product',
      },
      {
        contentsetItem: 'All Items',
        group: 'Usage',
        value: 'Drug Design API',
        entityFamily: 'pqr',
        entityFamilyCount: '0',
        entityCount: '0',
        itemCount: '1721',
        contentset: 'Amazon',
        factName: 'Allowed Product',
      },
    ];
    this.rowData = data.sort((a, b) =>
     -1
    );
  }
}
