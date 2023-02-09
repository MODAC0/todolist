import React, { useEffect, useState } from "react";
import { MainPage } from "./Pages/MainPage";
import { GlobalStyle } from "./Style";
import { Route, Routes } from "react-router-dom";
import { AddPage } from "./Pages/AddPage";
import { Splash } from "./Pages/Splash";

function App() {
  const [tags, setTags] = useState();
  const [todo, setTodo] = useState();
  const [isOn, setIsOn] = useState("");
  const [ispending, setIspending] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3001/data/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setIspending(false);
        setTags(data.map((el) => el.cate));
        setTodo(data);
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      {ispending || (
        <div className="App">
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route
              path="/main"
              element={
                <MainPage
                  tags={tags}
                  todo={todo}
                  setTags={setTags}
                  setTodo={setTodo}
                  isOn={isOn}
                  setIsOn={setIsOn}
                />
              }
            ></Route>
            <Route
              path="/add"
              element={
                <AddPage
                  tags={tags}
                  setTags={setTags}
                  setTodo={setTodo}
                  todo={todo}
                  isOn={isOn}
                  setIsOn={setIsOn}
                />
              }
            ></Route>
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
