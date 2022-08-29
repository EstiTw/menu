import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      {/* <Categories /> */}
      <Menu items={items} />
    </main>
  );
}

export default App;
