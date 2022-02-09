import Card from "./UI/Card";
import classes from "./Tag.module.css";
import { useState } from "react";

const Tag = () => {
  const [tags, setTags] = useState(["react", "javaScript"]);
  const [inputValue, setInputValue] = useState("");

  const inputValueChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const addTags = (event) => {
    if (event.key === "Enter" && inputValue) {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const deleteTagHandler = (tag) => {
    setTags([...tags.filter((data) => data !== tag)]);
  };

  return (
    <Card className={classes.common}>
      <header className={classes.header}>
        <h2 className={classes.h2}>Tag</h2>
      </header>
      <div className={classes.content}>
        <div className={classes.tagArea}>
          <div className={classes.display}>
            {tags.map((tag, i) => (
              <div className={classes.tag} key={i}>
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
            value={inputValue}
            placeholder="Press enter to add"
            onChange={inputValueChangeHandler}
            onKeyDown={addTags}
          />
        </div>
      </div>
    </Card>
  );
};

export default Tag;
