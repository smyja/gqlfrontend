

import React from "react";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import DashboardShell from "./Dashboard";

import { NotificationsProvider } from '@mantine/notifications';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
    <NotificationsProvider>
        <DashboardShell />
        </NotificationsProvider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

