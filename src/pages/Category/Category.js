import React from "react";

const Category = props => {
  return <div>CategoryPage {props.match.params.categoryId}</div>;
};

export default Category;
