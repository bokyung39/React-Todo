import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [inputDisabled, setInputDisabled] = useState(false);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");

    if (toDos.length + 1 === 10) {
      setInputDisabled(true);
    }
  };

  console.log(toDos);

  const deleteBtn = (index) => {
    console.log("Delete button clicked at index:", index);
    setToDos((curToDos) =>
      curToDos.filter((_, curIndex) => curIndex !== index)
    );

    if (toDos.length - 1 < 10) {
      setInputDisabled(false);
    }
  };
  return (
    <div className={styles.container}>
      <h1>My To-do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder={
            inputDisabled
              ? "Finish what's on the list first :("
              : "Write your to do"
          }
          disabled={inputDisabled}
        />
      </form>
      <hr />
      <ul className={styles.ul}>
        {toDos.map((item, index) => (
          <li className={styles.li} key={index}>
            {item}
            <Button onClick={() => deleteBtn(index)} text="❌" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
