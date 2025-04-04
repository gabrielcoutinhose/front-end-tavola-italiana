import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import AppProvider from "./hooks";
import AppRoutes from "./routes/routes";
import GlobalStyles from "./styles/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <AppProvider>
      <AppRoutes />
    </AppProvider>
    <ToastContainer autoClose={2000} theme="colored" />
  </>
);
