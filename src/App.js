import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

function App() {
  const [items, setItems] = useState(data);

  const handleFilter = (category) => {
    const filtered =
      category === "all"
        ? data
        : data.filter((item) => item.category === category);
    setItems(filtered);
  };

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories onFilter={handleFilter} />
      <Menu items={items} />
    </main>
  );
}

export default App;
