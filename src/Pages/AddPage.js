import Header from "../Components/Header";
import { TagList } from "../Components/TagList";
import { TodoInput, ListTitle } from "../Style";
export const AddPage = ({ tags, setTags, setTodo, todo, isOn, setIsOn }) => {
  // todo.map((arr) => console.log(arr.cate));
  // todo.map((arr) => console.log(arr.todo));
  const createTodo = (e) => {
    if (e.key === "Enter" && e.target.value !== "" && isOn !== "") {
      let data = todo.filter((arr) => arr.cate === isOn)[0].todo;
      let TodoAdd = [...data, e.target.value];
      // console.log("추가해야될 배열" + TodoAdd);
      console.log(todo);
    }
  };
  return (
    <>
      <Header
        Title="할 일 추가하기"
        Subtext="태그와 작업을 마음껏 만들어 보세요!"
      />
      <TagList tags={tags} setTags={setTags} isOn={isOn} setIsOn={setIsOn} />
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
