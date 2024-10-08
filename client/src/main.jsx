import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Theme } from "@radix-ui/themes";

// CSS Reset & Typography
import "./styles/resets.css";

// Global styling
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "@radix-ui/themes/styles.css";

// Root component
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Theme>
          <App />
        </Theme>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
