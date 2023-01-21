import React, { useState } from "react";
import { TodoLists } from "./Pages/TodoLists";
import { GlobalStyle } from "./Style";
import { Route, Routes } from "react-router-dom";
import { AddPage } from "./Pages/AddPage";

function App() {
  const initialTags = ["모두", "공부", "운동", "개인적인"];
  const [tags, setTags] = useState(initialTags);

  console.log(tags);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<TodoLists tags={tags} setTags={setTags} />}
          ></Route>
          <Route
            path="/add"
            element={<AddPage tags={tags} setTags={setTags} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
