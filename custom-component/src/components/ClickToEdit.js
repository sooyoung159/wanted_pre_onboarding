import React, { useState } from "react";

import Card from "./UI/Card";

import classes from "./ClickToEdit.module.css";

const ClickToEdit = () => {
  const [name, setName] = useState("최해커");
  const [age, setAge] = useState("30");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={classes.common}>
      <header className={classes.header}>
        <h2 className={classes.h2}>ClickToEdit</h2>
      </header>
      <div className={classes.content}>
        <form>
          <div className={classes.nameInput}>
            <label htmlFor="name" className={classes.label}>
              이름
            </label>
            <input
              id="name"
              type="text"
              onBlur={nameChangeHandler}
              className={classes.input}
            />
          </div>
          <div className={classes.ageInput}>
            <label htmlFor="age" className={classes.label}>
              나이
            </label>

            <input
              id="age"
              type="number"
              onBlur={ageChangeHandler}
              className={classes.input}
            />
          </div>
        </form>
        <div className={classes.result}>
          이름 {name} 나이 {age}
        </div>
      </div>
    </Card>
  );
};

export default ClickToEdit;
