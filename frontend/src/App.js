import "./App.css";
import Header from "./myComponents/Header.js";
import { About } from "./myComponents/About.js";
import React, { useState } from "react";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Home from "./Home";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import CreateTodo from "./CreateTodo";
function App() {




  // if (window.localStorage.getItem("todos") === null) {
  //   initTodo = [];
  // } else {
  //   initTodo = JSON.parse(window.localStorage.getItem("todos"));
  // }



  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/home" element={
          <><Header titleName="My Todos List" searchBar={true} />
            <Home /></>}

        ></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        {/* <Route exact path="/home" element={
          <><Header titleName="My Todos List" searchBar={true} />
            <Home /></>}>
        </Route> */}

        <Route exact path="/create" element={<CreateTodo />}></Route>
        <Route exact path="/about" element={
          <><Header titleName="My Todos List" searchBar={true} logOut={true} />
            <About /></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
