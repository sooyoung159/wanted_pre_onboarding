import Card from "./UI/Card";
import classes from "./Toggle.module.css";
import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <Card className={classes.common}>
      <header className={classes.header}>
        <h2 className={classes.h2}>Toggle</h2>
      </header>
      <div className={classes.content}>
        <div className={classes.container}>
          <input
            type="checkbox"
            className={classes.checkbox}
            name="toggle"
            id="toggle"
            onChange={toggleHandler}
          />
          <label htmlFor="toggle" className={classes.label}>
            <div className={classes.switch} />
            <div className={classes.ball} />
          </label>
        </div>
        <div>{toggle ? "Toggle on" : "Toggle off"}</div>
      </div>
    </Card>
  );
};

export default Toggle;
