import "./index.css";
import React from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext.tsx";
import ProductContextProvider from "./context/ProductContext.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProductContextProvider>
          <App />
          <ToastContainer />
        </ProductContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
