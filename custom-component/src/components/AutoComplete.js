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

  return (
    <Card className={classes.common}>
      <h1>AutoComplete</h1>
      <input
        onChange={(event) => setSearch(event.target.value)}
        onClick={() => setDisplay(!display)}
        value={search}
      />
      {display && (
        <div>
          {DUMMYDATA.filter(
            (data) => data.indexOf(search.toLowerCase()) > -1
          ).map((data, i) => (
            <div onClick={() => completeName(data)} key={i}>
              {data}
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default AutoComplete;
