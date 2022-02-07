import React, { useState } from "react";

import Card from "./UI/Card";

import classes from "./ClickToEdit.module.css";

const ClickToEdit = (props) => {
  const [name, setName] = useState("최해커");
  const [age, setAge] = useState("30");

  let uName = "";
  let uAge = 0;

  const changeHandler = (event) => {
    event.preventDefault();
    uName = name;
    uAge = age;
    setName("");
    setAge("");
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={classes.common}>
      <h1>ClickToEdit</h1>
      <form onSubmit={changeHandler}>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          type="text"
          onBlur={nameChangeHandler}
          // value={setName}
        />
        <label htmlFor="age">나이</label>
        <input
          id="age"
          type="number"
          onBlur={ageChangeHandler}
          // value={setAge}
        />
      </form>
      <div>
        이름 {name} 나이 {age}
      </div>
    </Card>
  );
};

export default ClickToEdit;
