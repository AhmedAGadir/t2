'use strict';

import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './style.css'

const GridExample = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const addNewGroup = () => {
    var newGroupData = [
      {
        id: getNextId(),
        filePath: ['Music', 'wav', 'hit_' + new Date().getTime() + '.wav'],
        dateModified: 'Aug 23 2017 11:52:00 PM',
        size: 58.9,
      },
    ];
    gridApi.applyTransaction({ add: newGroupData });
  };

  const removeSelected = () => {
    var selectedNode = gridApi.getSelectedNodes()[0];
    if (!selectedNode) {
      console.warn('No nodes selected!');
      return;
    }
    gridApi.applyTransaction({ remove: getRowsToRemove(selectedNode) });
  };

  const moveSelectedNodeToTarget = (targetRowId) => {
    var selectedNode = gridApi.getSelectedNodes()[0];
    if (!selectedNode) {
      console.warn('No nodes selected!');
      return;
    }
    var targetNode = gridApi.getRowNode(targetRowId);
    var invalidMove =
      selectedNode.key === targetNode.key ||
      isSelectionParentOfTarget(selectedNode, targetNode);
    if (invalidMove) {
      console.warn('Invalid selection - must not be parent or same as target!');
      return;
    }
    var rowsToUpdate = getRowsToUpdate(selectedNode, targetNode.data.filePath);
    gridApi.applyTransaction({ update: rowsToUpdate });
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="example-wrapper">
        <div style={{ marginBottom: '5px' }}>
          <button onClick={() => addNewGroup()}>Add New Group</button>
          <button onClick={() => moveSelectedNodeToTarget(9)}>
            Move Selected to 'stuff'
          </button>
          <button onClick={() => removeSelected()}>Remove Selected</button>
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
                id: 1,
                filePath: ['Documents'],
              },
              {
                id: 2,
                filePath: ['Documents', 'txt'],
              },
              {
                id: 3,
                filePath: ['Documents', 'txt', 'notes.txt'],
                dateModified: 'May 21 2017 01:50:00 PM',
                size: 14.7,
              },
              {
                id: 4,
                filePath: ['Documents', 'pdf'],
              },
              {
                id: 5,
                filePath: ['Documents', 'pdf', 'book.pdf'],
                dateModified: 'May 20 2017 01:50:00 PM',
                size: 2.1,
              },
              {
                id: 6,
                filePath: ['Documents', 'pdf', 'cv.pdf'],
                dateModified: 'May 20 2016 11:50:00 PM',
                size: 2.4,
              },
              {
                id: 7,
                filePath: ['Documents', 'xls'],
              },
              {
                id: 8,
                filePath: ['Documents', 'xls', 'accounts.xls'],
                dateModified: 'Aug 12 2016 10:50:00 AM',
                size: 4.3,
              },
              {
                id: 9,
                filePath: ['Documents', 'stuff'],
              },
              {
                id: 10,
                filePath: ['Documents', 'stuff', 'xyz.txt'],
                dateModified: 'Jan 17 2016 08:03:00 PM',
                size: 1.1,
              },
              {
                id: 11,
                filePath: ['Music', 'mp3', 'pop'],
                dateModified: 'Sep 11 2016 08:03:00 PM',
                size: 14.3,
              },
              {
                id: 12,
                filePath: ['temp.txt'],
                dateModified: 'Aug 12 2016 10:50:00 PM',
                size: 101,
              },
              {
                id: 13,
                filePath: ['Music', 'mp3', 'pop', 'theme.mp3'],
                dateModified: 'Aug 12 2016 10:50:00 PM',
                size: 101,
              },
              {
                id: 14,
                filePath: ['Music', 'mp3', 'jazz'],
                dateModified: 'Aug 12 2016 10:50:00 PM',
                size: 101,
              },
            ]}
            defaultColDef={{
              flex: 1,
              filter: true,
              sortable: true,
              resizable: true,
            }}
            autoGroupColumnDef={{
              headerName: 'Files',
              minWidth: 330,
              cellRendererParams: {
                checkbox: true,
                suppressCount: true,
                innerRenderer: 'fileCellRenderer',
              },
            }}
            components={{ fileCellRenderer: getFileCellRenderer() }}
            treeData={true}
            animateRows={true}
            groupDefaultExpanded={-1}
            getDataPath={function (data) {
              return data.filePath;
            }}
            getRowNodeId={function (data) {
              return data.id;
            }}
            onGridReady={onGridReady}
          >
            <AgGridColumn
              field="dateModified"
              minWidth={250}
              comparator={(d1, d2) => {
                return new Date(d1).getTime() < new Date(d2).getTime() ? -1 : 1;
              }}
            />
            <AgGridColumn
              field="size"
              aggFunc="sum"
              valueFormatter={(params) => {
                return params.value
                  ? Math.round(params.value * 10) / 10 + ' MB'
                  : '0 MB';
              }}
            />
          </AgGridReact>
        </div>
      </div>
    </div>
  );
};

function getNextId() {
  if (!window.nextId) {
    window.nextId = 15;
  } else {
    window.nextId++;
  }
  return window.nextId;
}
function getFileCellRenderer() {
  function FileCellRenderer() { }
  FileCellRenderer.prototype.init = function (params) {
    var tempDiv = document.createElement('div');
    var value = params.value;
    var icon = getFileIcon(params.value);
    tempDiv.innerHTML = icon
      ? '<span><i class="' +
      icon +
      '"></i>' +
      '<span class="filename"></span>' +
      value +
      '</span>'
      : value;
    this.eGui = tempDiv.firstChild;
  };
  FileCellRenderer.prototype.getGui = function () {
    return this.eGui;
  };
  return FileCellRenderer;
}
function getRowsToRemove(node) {
  var res = [];
  for (var i = 0; i < node.childrenAfterGroup.length; i++) {
    res = res.concat(getRowsToRemove(node.childrenAfterGroup[i]));
  }
  return node.data ? res.concat([node.data]) : res;
}
function isSelectionParentOfTarget(selectedNode, targetNode) {
  var children = selectedNode.childrenAfterGroup;
  for (var i = 0; i < children.length; i++) {
    if (targetNode && children[i].key === targetNode.key) return true;
    isSelectionParentOfTarget(children[i], targetNode);
  }
  return false;
}
function getRowsToUpdate(node, parentPath) {
  var res = [];
  var newPath = parentPath.concat([node.key]);
  if (node.data) {
    node.data.filePath = newPath;
  }
  for (var i = 0; i < node.childrenAfterGroup.length; i++) {
    var updatedChildRowData = getRowsToUpdate(
      node.childrenAfterGroup[i],
      newPath
    );
    res = res.concat(updatedChildRowData);
  }
  return node.data ? res.concat([node.data]) : res;
}
function getFileIcon(name) {
  return endsWith(name, '.mp3') || endsWith(name, '.wav')
    ? 'far fa-file-audio'
    : endsWith(name, '.xls')
      ? 'far fa-file-excel'
      : endsWith(name, '.txt')
        ? 'far fa-file'
        : endsWith(name, '.pdf')
          ? 'far fa-file-pdf'
          : 'far fa-folder';
}
function endsWith(str, match) {
  var len;
  if (str == null || !str.length || match == null || !match.length) {
    return false;
  }
  len = str.length;
  return str.substring(len - match.length, len) === match;
}

render(<GridExample></GridExample>, document.querySelector('#root'));
