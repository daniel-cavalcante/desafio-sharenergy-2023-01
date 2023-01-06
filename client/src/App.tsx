import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/toBeUsed/Login";
import Home from "./components/Home/Home";
import Cat from "./components/toBeUsed/Cat";
import Dog from "./components/toBeUsed/Dog";
import Client from "./components/Client";

import Missing from "./components/toBeUsed/Missing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cat' element={<Cat />} />
          <Route path='/dog' element={<Dog />} />
          <Route path='/client' element={<Client />} />
          <Route path='*' element={<Missing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
