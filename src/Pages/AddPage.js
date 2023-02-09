import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { TagList } from "../Components/TagList";
import { TodoInput, ListTitle } from "../Style";
export const AddPage = ({ tags, setTags, todo, isOn, setIsOn, setTodo }) => {
  const navegate = useNavigate();
  const createTodo = (e) => {
    if (e.key === "Enter" && e.target.value !== "" && isOn !== "") {
      let data = todo.filter((arr) => arr.cate === isOn);
      console.log(data);
      let AddData = (data[0] = {
        id: data[0].id || 1,
        cate: data[0].cate || isOn,
        todo: [...data[0].todo, e.target.value] || [e.target.value],
      });
      let AddTodo = todo.map((arr) =>
        arr.cate === isOn ? (arr = AddData) : arr
      );
      setTodo(AddTodo);
      e.target.value = "";
      alert("오늘의 할 일이 등록되었습니다");
      navegate("/main");
    } else if (e.target.value !== "" && isOn === "") {
      alert("카테고리 태그를 선택해 주세요");
    }
  };
  return (
    <>
      <Header
        Title="할 일 추가하기"
        Subtext="태그와 작업을 마음껏 만들어 보세요!"
      />
      <TagList
        tags={tags}
        setTags={setTags}
        isOn={isOn}
        setIsOn={setIsOn}
        setTodo={setTodo}
        todo={todo}
      />
      <TodoInput>
        <ListTitle>작업 추가하기</ListTitle>
        <input
          onKeyUp={(e) => createTodo(e)}
          type="text"
          placeholder="추가하실 내용을 입력해 주세요."
        />
      </TodoInput>
    </>
  );
};
