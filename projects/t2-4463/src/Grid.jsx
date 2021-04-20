import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Grid = (props) => (
    <div
        style={{
            margin: "auto",
            marginTop: "20px"
        }}
    >
        <div
            id={props.id}
            style={{
                height: "100%",
                width: "100%"
            }}
            className="ag-theme-alpine"
        >
            <AgGridReact
                columnDefs={props.columnDefs}
                defaultColDef={{
                    flex: 1,
                    minWidth: 100
                }}
                onGridReady={(params) => {
                    props.registerGridApi(props.id, params.api);
                }}
                rowData={props.rowData}
                domLayout="autoHeight"
            />
        </div>
    </div>
);

export default Grid;