import Header from "./myComponents/Header.js";
import { About } from "./myComponents/About.js";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Home from "./Home";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import CreateTodo from "./CreateTodo";
import React, { useState } from "react";
import { useEffect } from "react";
import { AddTodo } from "./myComponents/AddTodo.js";
import Todos from "./myComponents/Todos.js";

function App() {
  let initTodo;

  if (window.localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(window.localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("onDelete is working of todo:", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    window.localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let Sno;
    console.log("I am adding this todo");
    if (todos.length === 0) {
      Sno = 1;
    } else {
      Sno = todos[todos.length - 1].Sno + 1;
    }

    const myTodo = {
      Sno: Sno,
      title: title,
      description: desc,
    };
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/home" element={<>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
                {/* <About /> */}
              </>}

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
