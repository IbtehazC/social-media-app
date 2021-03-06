import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { ChakraProvider } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./app/theme/theme";
import { store, StoreContext } from "./app/stores/store";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <StoreContext.Provider value={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </StoreContext.Provider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
