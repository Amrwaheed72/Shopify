import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./contexts/ContextProvider.jsx";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NMaF1cWmhNYVJpR2Nbek5xdF9EaVZRQGY/P1ZhSXxWdkZjW31dc3JXQGdeWUc=",
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
);
