import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
// import {
//   MatomoProvider,
//   createInstance,
// } from "@datapunt/matomo-tracker-react";
import React from "react";

// const matomoInstance = createInstance({
//   urlBase: "://LINK.TO.DOMAIN",
//   linkTracking: false, // Important!
//   siteId: 0,
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <MatomoProvider value={matomoInstance}> */}
      <App />
    {/* </MatomoProvider> */}
  </React.StrictMode>
);
