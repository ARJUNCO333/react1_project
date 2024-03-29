import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import FormOld from "./Components/OldComp/FormOld/FormOld.js";

import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "./App.js";
import PatientDetails from "./Pages/PatientDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "old",
    element: < FormOld/>
  },
  {
    path:"patientdetails",
    element:<PatientDetails/>
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
