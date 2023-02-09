//태그기능 구현
import { useLocation } from "react-router-dom";
import { TagsList, ListTitle } from "../Style";
export const TagList = ({ tags, setTags, isOn, setIsOn, todo, setTodo }) => {
  const location = useLocation().pathname;
  const handleTag = (e) => {
    setIsOn(() => e.target.textContent);
  };
  const removeTags = (indexToRemove) => {
    const deleteTag = tags.filter((_, index) => index !== indexToRemove);
    setTags(deleteTag);
    let deleteData = todo.filter((e) => e.cate !== tags[indexToRemove]);
    setTodo(deleteData);
  };

  const addTags = (event) => {
    let value = event.target.value;
    let data = { id: `${todo.length + 1}` || 1, cate: `${value}`, todo: [] };
    if (event.key === "Enter" && value !== "" && !tags.includes(value)) {
      setTags([...tags, value]);
      if (todo.map((data) => data.cate !== value && data !== undefined)) {
        todo.push(data);
      }
      event.target.value = "";
    }
  };
  return (
    <>
      <TagsList>
        <ListTitle className="title">태그</ListTitle>
        <ul>
          {tags.map((tag, index) => (
            <li
              key={index}
              onClick={(e) => handleTag(e)}
              className={`${tag === isOn ? "one-tag" : "tag"}`}
            >
              {tag}
              <img
                src="img/tag_close_btn.svg"
                alt="delete"
                onClick={() => removeTags(index)}
                className={`tag-close-icon ${
                  location === "/add" ? null : "closebtn-delete"
                }`}
              />
            </li>
          ))}
        </ul>
        <input
          className={location === "/add" ? null : "input-delete"}
          type="text"
          onKeyUp={(e) => {
            addTags(e);
          }}
          placeholder="태그를 입력해 주세요."
        />
      </TagsList>
    </>
  );
};
