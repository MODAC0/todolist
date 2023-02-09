import React, { Fragment } from "react";
import {
  TodoListSection,
  TodoHeader,
  ListTitle,
  OtherBtn,
  ListUl,
  Radio,
  TodoLi,
  TodoText,
  DeleteBtn,
  NoneImg,
  ImgText,
} from "../Style";

export const TodoList = ({ todo, isOn, setTodo }) => {
  const deleteTodo = (e) => {
    let data = todo.filter((arr) => arr.cate === isOn);
    const removeData = data[0].todo.filter((todo) => todo !== e.target.alt);
    let deleteData = (data[0] = {
      id: data[0].id,
      cate: data[0].cate,
      todo: [...removeData],
    });
    let deleteTodo = todo.map((arr) =>
      arr.cate === isOn ? (arr = deleteData) : arr
    );
    setTodo(deleteTodo);
  };

  return (
    <>
      {isOn !== "" ? (
        <Fragment>
          <TodoListSection>
            <TodoHeader>
              <ListTitle>{isOn}</ListTitle>
              <OtherBtn src="img/Other_btn.svg" />
            </TodoHeader>
            <ListUl>
              {todo.map((data) => {
                return data.cate === isOn
                  ? data.todo.map((todo, index) => {
                      return (
                        <TodoLi key={index}>
                          <Radio type={"checkbox"} id={index} />
                          <label id={index} />
                          <TodoText>{todo}</TodoText>
                          <DeleteBtn
                            src="img/close_btn.svg"
                            alt={todo}
                            onClick={(e) => deleteTodo(e)}
                          />
                        </TodoLi>
                      );
                    })
                  : null;
              })}
            </ListUl>
          </TodoListSection>
        </Fragment>
      ) : (
        <Fragment>
          <NoneImg src="img/img_none.svg" />
          <ImgText>
            아직 작업이 없네요. <br />
            +를 클릭해서 작업을 추가하세요.
          </ImgText>
        </Fragment>
      )}
    </>
  );
};
