import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Success from "./Success";
import Pay from "./Pay";
import Home from "./Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/pay" element={<Pay></Pay>}></Route>
        <Route path="/success" element={<Success></Success>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
