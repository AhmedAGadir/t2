
export const defaultColDef = {
    flex: 1,
    editable: true,
    resizable: true,
};


export const data = [
    { fundName: 'Asset 1', current: '0.03', newValue: '', optimal: '', agreed: '' },
    { fundName: 'Asset 2', current: '', newValue: '0.05', optimal: '', agreed: '' },
    { fundName: 'Asset 3', current: '', newValue: '', optimal: '', agreed: '' },
    { fundName: 'Asset 4', current: '', newValue: '', optimal: '0.56', agreed: '' },
    { fundName: 'Asset 5', current: '', newValue: '', optimal: '', agreed: '0.34' },

]

const valueFormatter = (params, isTooltip = false) => {
    const value = (params.value) ? params.value : '';
    if (value) {
        return isTooltip ? (`${value * 100}%`) : (`${parseFloat(value * 100).toFixed(2)}%`);
    }
    return value;
}

const isEditable = params => {
    return params.node.rowPinned !== 'bottom'

}

export const columnDefs = [
    {
        headerName: "Name",
        headerTooltip: "Name",
        field: "fundName",
        cellClass: "cell-wrap-text",
        autoHeight: true,
        editable: false,
        suppressPaste: true,
        width: 150,
    },
    {
        headerName: "Current Weights",
        headerTooltip: "Current Weights",
        field: "current",
        cellClass: "cell-edit-text",
        autoHeight: true,
        editable: isEditable,
        width: 50,
        valueFormatter: (params) => valueFormatter(params, false),
        tooltip: (params) => valueFormatter(params, true),
    },
    {
        headerName: "Agreed Changes",
        headerTooltip: "Agreed Changes",
        field: "agreed",
        cellClass: "cell-edit-text",
        autoHeight: true,
        editable: isEditable,
        width: 50,
        valueFormatter: (params) => valueFormatter(params, false),
        tooltip: (params) => valueFormatter(params, true),
    },
    {
        headerName: "New Weights",
        headerTooltip: "New Weights",
        field: "newValue",
        cellClass: "cell-edit-text",
        autoHeight: true,
        editable: isEditable,
        width: 50,
        valueFormatter: (params) => valueFormatter(params, false),
        tooltip: (params) => valueFormatter(params, true),
    },
    {
        headerName: "Optimal Weights",
        headerTooltip: "Optimal Weights",
        field: "Optimal",
        cellClass: "cell-wrap-text",
        autoHeight: true,
        editable: false,
        suppressPaste: true,
        width: 50,
        valueFormatter: (params) => valueFormatter(params, false),
        tooltip: (params) => valueFormatter(params, true),
    },
    {
        headerName: "",
        headerTooltip: "",
        field: "OptimalWeights",
        autoHeight: true,
        editable: false,
        suppressPaste: true,
    },
];