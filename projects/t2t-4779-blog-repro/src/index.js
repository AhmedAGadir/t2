import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

const element =  (
<Provider store={store}>
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
</Provider>
)

ReactDOM.render(element,document.getElementById("root")
);
