import { useState } from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import classes from "./Tab.module.css";

const Tab = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabHandler = (index) => {
    setActiveIndex(index);
  };

  const DUMMYTABLE = [
    {
      title: "Tab1",
      content: "Tab menu ONE",
      key: "tab1",
    },
    {
      title: "Tab2",
      content: "Tab menu TWO",
      key: "tab2",
    },
    {
      title: "Tab3",
      content: "Tab menu THREE",
      key: "tab3",
    },
  ];

  return (
    <Card className={classes.common}>
      <header className={classes.header}>
        <h2 className={classes.h2}>Tab</h2>
      </header>
      <div className={classes.content}>
        {DUMMYTABLE.map((data, i) => (
          <Button onClick={() => tabHandler(i)} key={data.key}>
            {data.title}
          </Button>
        ))}
        <div className={classes.result}>{DUMMYTABLE[activeIndex].content}</div>
      </div>
    </Card>
  );
};

export default Tab;
