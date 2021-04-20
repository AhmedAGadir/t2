'use strict';

import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const GridExample = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const onFilterTextBoxChanged = () => {
    gridApi.setQuickFilter(document.getElementById('filter-text-box').value);
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="example-wrapper">
        <div style={{ marginBottom: '5px' }}>
          <input
            type="text"
            id="filter-text-box"
            placeholder="Filter..."
            onInput={() => onFilterTextBoxChanged()}
          />
        </div>
        <div
          id="myGrid"
          style={{
            height: '100%',
            width: '100%',
          }}
          className="ag-theme-alpine"
        >
          <AgGridReact
            rowData={[
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
                orgHierarchy: [
                  'Erica Rogers',
                  'Malcolm Barrett',
                  'Esther Baker',
                ],
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
                orgHierarchy: [
                  'Erica Rogers',
                  'Malcolm Barrett',
                  'Francis Strickland',
                ],
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
            ]}
            defaultColDef={{ flex: 1 }}
            autoGroupColumnDef={{
              headerName: 'Organisation Hierarchy',
              minWidth: 300,
              cellRendererParams: { suppressCount: true },
            }}
            treeData={true}
            animateRows={true}
            groupDefaultExpanded={-1}
            getDataPath={function (data) {
              return data.orgHierarchy;
            }}
            onGridReady={onGridReady}
          >
            <AgGridColumn field="jobTitle" />
            <AgGridColumn field="employmentType" />
          </AgGridReact>
        </div>
      </div>
    </div>
  );
};

render(<GridExample></GridExample>, document.querySelector('#root'));
