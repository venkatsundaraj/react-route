import React, { Fragment } from "react";

import { Link } from "react-router-dom";

const Products = function () {
  console.log("products");
  return (
    <Fragment>
      <ul>
        <li>
          <Link to="/products/p1">Books</Link>
        </li>
        <li>
          <Link to="/products/p2">Oils</Link>
        </li>
        <li>
          <Link to="/products/p3">Appliances</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Products;
