import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import WhiskyListProvider from "providers/WhiskyListProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OldMeetups from "pages/OldMeetups";
import Nav from "organisms/Nav";
import Footer from "molecules/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WhiskyListProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="old-meetups" element={<OldMeetups />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </WhiskyListProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
