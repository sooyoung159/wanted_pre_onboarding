import Card from "./UI/Card";
import classes from "./AutoComplete.module.css";
import { useState } from "react";

const DUMMYDATA = ["apple", "banana", "carot", "durian", "egg"];

const AutoComplete = () => {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");

  const completeName = (name) => {
    setSearch(name);
    setDisplay(false);
  };

  const searchHandler = (event) => {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };

  const blurHandler = () => {
    setDisplay(false);
  };

  return (
    <Card className={classes.common}>
      <header className={classes.header}>
        <h2 className={classes.h2}>AutoComplete</h2>
      </header>
      <div className={classes.content}>
        <input
          onChange={searchHandler}
          // input 눌렀을 때 처음부터 모든 자료를 보여 줄 수 있도록
          // onClick={() => setDisplay(!display)}
          value={search}
          className={classes.input}
          onBlur={blurHandler}
        />
        {display && (
          <div className={classes.searchBox}>
            {DUMMYDATA.filter(
              (data) => data.indexOf(search.toLowerCase()) > -1
            ).map((data) => (
              <div onClick={() => completeName(data)} key={data}>
                {data}
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default AutoComplete;
