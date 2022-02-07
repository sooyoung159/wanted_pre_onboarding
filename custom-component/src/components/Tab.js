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
      title: (
        <button
          className={activeIndex === 0 ? classes.isActive : ""}
          onClick={() => tabHandler(0)}
        >
          Tab1
        </button>
      ),
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
      <h1>Tab</h1>
      {dummyTable.map((data) => data.title)}
      <div>{dummyTable[activeIndex].content}</div>
    </Card>
  );
};

export default Tab;
