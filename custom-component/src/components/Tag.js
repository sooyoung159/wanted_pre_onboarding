import Card from "./UI/Card";
import classes from "./Tag.module.css";
import { useRef, useState } from "react";
// import Tag from "./UI/Tag";

const Tag = () => {
  const [tags, setTags] = useState(["react", "jquery"]);
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");

  const inputValueChangeHandler = (event) => {
    setInputValue(event.target.value);
    // if (event.key === "Enter") {

    // }

    // if (inputChange[inputChange.length - 1] === ",") {
    //   setTags([...tags, inputChange.slice(0, inputChange.length - 1)]);
    //   setInputValue("");
    // }
  };

  const addTags = (event) => {
    if (event.key === "Enter" && inputValue) {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const deleteTagHandler = (tag) => {
    setTags([...tags.filter((element) => element !== tag)]);
  };

  //   const cullTagFromTags = (tag) => {
  //     setTags([...tags.filter((element) => element !== tag)]);
  //   };

  return (
    <Card className={classes.common}>
      <h1>Tag</h1>
      <div className={classes.tagArea}>
        <div className={classes.display}>
          {tags.map((tag) => (
            // <Tag tagText={tag} deleteTagHandler={deleteTagHandler} />
            <div className={classes.tag}>
              <div className={classes.tagText}>{tag}</div>
              <div
                className={classes.tagClose}
                onClick={() => {
                  deleteTagHandler(tag);
                }}
              >
                X
              </div>
            </div>
          ))}
        </div>
        <input
          className={classes.input}
          type="text"
          // ref={inputRef}
          value={inputValue}
          placeholder="Press enter to add"
          onChange={inputValueChangeHandler}
          onKeyDown={addTags}
        />
      </div>
    </Card>
  );
};

export default Tag;

// const TagComponent = (props) => {
//   return (
//     <div className="tagComponent">
//       <div className="tagComponent__text">{props.text}</div>
//       <div
//         className="tagComponent__close"
//         onClick={() => {
//           props.cullTagFromTags(props.text);
//         }}
//       >
//         X
//       </div>
//     </div>
//   );
// };

// const TagInput = (props) => {
//   const [tags, setTags] = React.useState(["JavaScript", "TypeScript"]);
//   const inputRef = React.useRef();
//   const [inputValue, setInputValue] = React.useState("");

//   const inputValueChangeHandler = (inputChange) => {
//     setInputValue(inputChange);
//     if (inputChange[inputChange.length - 1] === ",") {
//       setTags([...tags, inputChange.slice(0, inputChange.length - 1)]);
//       setInputValue("");
//     }
//   };
//   const cullTagFromTags = (tag) => {
//     setTags([...tags.filter((element) => element !== tag)]);
//   };

//   return (
//     <div className="tagArea">
//       <div className="tagArea__displayArea">
//         {tags.map((tag) => (
//           <TagComponent text={tag} cullTagFromTags={cullTagFromTags} />
//         ))}
//       </div>
//       <input
//         type="text"
//         ref={inputRef}
//         value={inputValue}
//         onChange={(event) => inputValueChangeHandler(event.target.value)}
//         placeholder="separated by commas"
//         className="tagArea__input"
//       />
//     </div>
//   );
// };
