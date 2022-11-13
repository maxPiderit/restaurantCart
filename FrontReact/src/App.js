import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import logo from "./logo.JPG";
import { StateContext } from "./context/StateContext";
import Navbar from "./components/Navbar";
import { Toaster } from 'react-hot-toast';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const categories = allCategories;

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <StateContext>

      <main>

        <Navbar />
        {/* <Toaster /> */}
        <section className="menu section">
          <div className="title">
            <img src={logo} alt="logo" className="logo" />
            <h2>Menu List</h2>
            <div className="underline"></div>
          </div>
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems}
          />
          <Menu items={menuItems} />
        </section>
      </main>
    </StateContext>
  );
};

export default App;
