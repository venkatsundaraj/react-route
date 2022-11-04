import React, { Fragment } from "react";

import { useParams } from "react-router-dom";

const ProductDetails = function () {
  const params = useParams();
  return (
    <Fragment>
      <h2>Product Item</h2>
      <p>{params.productId}</p>
    </Fragment>
  );
};

export default ProductDetails;
