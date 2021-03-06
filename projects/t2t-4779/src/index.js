import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import ExportApp from "./App";

import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ExportApp />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);
