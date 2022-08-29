import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const allCategories = items.map((itemMenu) => itemMenu.category);
    const uniqeCategories = ["all", ...new Set(allCategories)];
    setCategories(uniqeCategories);
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? items
        : items.filter((item) => item.category === category);
    setMenuItems(filtered);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories onFilter={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
