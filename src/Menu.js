import React from "react";

const Menu = ({ items }) => {
  console.log(items);
  return (
    <section className="section-center">
      {items.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <article className="menu-item">
            <img className="photo" src={img} alt={title} />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${Math.ceil(price)}</h4>
              </header>
              <div className="item-text">{desc}</div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Menu;
