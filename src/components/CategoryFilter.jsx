import React from "react";

const categories = ["technology", "sports", "health", "business", "science", "entertainment"];

const CategoryFilter = ({ setCategory }) => {
  return (
    <div className="categories">
      {categories.map((cat) => (
        <button key={cat} onClick={() => setCategory(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );    
};

export default CategoryFilter;
