import "./App.css";
import AutoComplete from "./components/AutoComplete";
import ClickToEdit from "./components/ClickToEdit";
import Modal from "./components/Modal";
import Tab from "./components/Tab";
import Tag from "./components/Tag";
import Toggle from "./components/Toggle";
import Button from "./components/UI/Button";
// import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <AutoComplete />
      <ClickToEdit />
    </div>
  );
}

export default App;
