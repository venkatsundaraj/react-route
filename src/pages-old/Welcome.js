import React, { Fragment } from "react";

import Products from "./Products";

import { Route, Routes } from "react-router-dom";

const Welcome = function () {
  console.log("welcome");
  return (
    <Fragment>
      <h1>You're Welcomed!</h1>;
      <Routes>
        <Route path="welcome/newuser" element={<p>Good</p>} />
      </Routes>
    </Fragment>
  );
};

export default Welcome;
