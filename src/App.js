import React, { useState } from "react";
import { MainPage } from "./Pages/MainPage";
import { GlobalStyle } from "./Style";
import { Route, Routes } from "react-router-dom";
import { AddPage } from "./Pages/AddPage";
import data from "./data.json";

function App() {
  const initialTags = data.data.map((el) => el.cate);
  const initialTodo = data.data.map((el) => el.todo);
  const [tags, setTags] = useState(initialTags);
  const [todo, setTodo] = useState(initialTodo);
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<MainPage tags={tags} todo={todo} />}
          ></Route>
          <Route
            path="/add"
            element={
              <AddPage tags={tags} setTags={setTags} setTodo={setTodo} />
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
