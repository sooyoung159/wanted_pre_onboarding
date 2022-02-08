import { useState } from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import classes from "./Tab.module.css";

const Tab = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabHandler = (index) => {
    setActiveIndex(index);
  };

  const dummyTable = [
    {
      title: <Button onClick={() => tabHandler(0)}>Tab1</Button>,
      content: "Tab menu ONE",
    },
    {
      title: <Button onClick={() => tabHandler(1)}>Tab2</Button>,
      content: "Tab menu TWO",
    },
    {
      title: <Button onClick={() => tabHandler(2)}>Tab3</Button>,
      content: "Tab menu THREE",
    },
  ];

  return (
    <Card className={classes.common}>
      <header className={classes.header}>
        <h2 className={classes.h2}>Tab</h2>
      </header>
      <div className={classes.content}>
        {dummyTable.map((data) => data.title)}
        <div className={classes.result}>{dummyTable[activeIndex].content}</div>
      </div>
    </Card>
  );
};

export default Tab;
