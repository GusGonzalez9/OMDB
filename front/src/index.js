// el inicio de la app
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Main from "./components/Main";
import store from "./state/store";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#eeeeee",
    },
    secondary: {
      main: "#212121",
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Route path="/" component={Main} />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
