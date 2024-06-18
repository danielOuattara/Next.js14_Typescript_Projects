"use client";

import { useState } from "react";
import menuItems from "@/data";
import MenuCategories from "./components/MenuCategoriesFunction";
import Menu from "./components/MenuFunction";

export default function PageAppFunction() {
  const [category, setCategory] = useState("all");

  const filteredMenu = menuItems.filter((item) => item.category === category);
  const menuToRender = category === "all" ? menuItems : filteredMenu;

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <MenuCategories
            setCategory={setCategory}
            // selected={selected}
            // setSelected={setSelected}
          />
          <Menu menuToRender={menuToRender} />
        </div>
      </section>
    </main>
  );
}
