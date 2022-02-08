import Card from "./UI/Card";
import classes from "./AutoComplete.module.css";
import { useState } from "react";

const DUMMYDATA = ["apple", "banana", "carot", "durian"];

const AutoComplete = () => {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");

  const completeName = (name) => {
    setSearch(name);
    setDisplay(false);
  };

  const searchHandler = (event) => {
    setDisplay(true);
    setSearch(event.target.value);
  };

  return (
    <Card className={classes.common}>
      <header className={classes.header}>
        <h2 className={classes.h2}>AutoComplete</h2>
      </header>
      <div className={classes.content}>
        <input
          onChange={searchHandler}
          // onClick={() => setDisplay(!display)}
          value={search}
          className={classes.input}
        />
        {display && (
          <div className={classes.searchBox}>
            {DUMMYDATA.filter(
              (data) => data.indexOf(search.toLowerCase()) > -1
            ).map((data, i) => (
              <div onClick={() => completeName(data)} key={i}>
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
