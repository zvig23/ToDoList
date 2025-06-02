import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";
import React from "react";
import { MATOMO_URL } from "./assets/config.ts";

const matomoInstance = createInstance({
  urlBase: MATOMO_URL,
  siteId: 1,
  linkTracking: false, 
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MatomoProvider value={matomoInstance}>
      <App />
    </MatomoProvider>
  </React.StrictMode>
);
