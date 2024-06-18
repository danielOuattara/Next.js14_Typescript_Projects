"use client";

import menuItems from "@/data";
import { useState } from "react";

export default function MenuCategories({
  setCategory,
}: MenuCategoriesPropsType) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories: string[] = [
    "all",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  return (
    <ul className="btn-container">
      {categories.map((category) => {
        return (
          <li key={category}>
            <button
              className={
                selectedCategory === category
                  ? "filter-btn filter-btn-selected"
                  : "filter-btn"
              }
              onClick={() => {
                setSelectedCategory(category);
                setCategory(category);
              }}
            >
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
