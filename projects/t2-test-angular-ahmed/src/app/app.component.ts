import { Component } from '@angular/core';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `<div class="example-wrapper">
    <div style="margin-bottom: 5px;">
      <input
        type="text"
        id="filter-text-box"
        placeholder="Filter..."
        (input)="onFilterTextBoxChanged()"
      />
    </div>
    <ag-grid-angular
      #agGrid
      style="width: 100%; height: 100%;"
      id="myGrid"
      class="ag-theme-alpine"
      [rowData]="rowData"
      [columnDefs]="columnDefs"
      [defaultColDef]="defaultColDef"
      [autoGroupColumnDef]="autoGroupColumnDef"
      [treeData]="true"
      [animateRows]="true"
      [groupDefaultExpanded]="groupDefaultExpanded"
      [getDataPath]="getDataPath"
      (gridReady)="onGridReady($event)"
    ></ag-grid-angular>
  </div> `,
})
export class AppComponent {
  public gridApi;
  public gridColumnApi;

  public rowData;
  public columnDefs;
  public defaultColDef;
  public autoGroupColumnDef;
  public groupDefaultExpanded;
  public getDataPath;

  constructor() {
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
    this.defaultColDef = { flex: 1 };
    this.autoGroupColumnDef = {
      headerName: 'Organisation Hierarchy',
      minWidth: 300,
      cellRendererParams: { suppressCount: true },
    };
    this.groupDefaultExpanded = -1;
    this.getDataPath = function (data) {
      return data.orgHierarchy;
    };
  }

  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(
      (document.getElementById('filter-text-box') as any).value
    );
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
