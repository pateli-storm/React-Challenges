import React, { useState } from "react";
import List from "./List";
import Form from "./Form";

export default function App() {
  const [list, setList] = useState([
    {
      id: 1,
      text: "Przemysl",
      mark: false,
    },
  ]);

  const [acutalItem, setItem] = useState("");

  function handleChange(e) {
    setItem(e.target.value);
  }

  function addList(e) {
    e.preventDefault();

    const newItemId = Math.max(...list.map((maxList) => maxList.id + 1));
    setList((prevState) => {
      const newUpdatedItem = [
        ...prevState,
        { id: newItemId, text: acutalItem, mark: false },
      ];
      return newUpdatedItem;
    });
  }

  function removeItem(e) {
    setList((prevState) => {
      return prevState.filter((item) => item.id !== parseInt(e.target.id));
    });
  }

  function markupItem(e) {
    setList((prevState) => {
      return prevState.map((item) => {
        return item.id == e.target.id ? { ...item, mark: !item.mark } : item;
      });
    });
  }

  const fullList = list.map((li) => (
    <List key={li.id} list={li} removeItem={removeItem} markup={markupItem} />
  ));

  return (
    <main>
      <Form
        handleSubmit={addList}
        handleChange={handleChange}
        value={acutalItem}
      />
      <ul>{fullList}</ul>
    </main>
  );
}
