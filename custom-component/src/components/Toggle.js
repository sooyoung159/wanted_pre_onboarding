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
      <h1>Toggle</h1>
      <div className={classes.container}>
        <input
          type="checkbox"
          className={classes.checkbox}
          name="toggle"
          id="toggle"
          onChange={toggleHandler}
        />
        <label htmlFor="toggle" className={classes.label}>
          {/* <span className={classes.switch} /> */}
          <div className={classes.ball} />
        </label>
      </div>
      {toggle ? "Toggle on" : "Toggle off"}
    </Card>
  );
};

export default Toggle;
