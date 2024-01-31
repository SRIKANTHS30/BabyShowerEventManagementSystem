// Receipe.js

import "./Receipe.css";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import items from "../components/Data";
import { useState } from "react";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export default function Receipe() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);
  const [addedItems, setAddedItems] = useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  const handleAdd = (id) => {
    const selectedItem = items.find((item) => item.id === id);
    setAddedItems((prevItems) => [...prevItems, selectedItem]);
  };

  const handleDelete = (id) => {
    setAddedItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} handleAdd={handleAdd} />
      </section>
      <section className="added-items section">
        <h2>Added Items</h2>
        <ul>
          {addedItems.map((item) => (
            <li key={item.id}>
              {item.title}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
