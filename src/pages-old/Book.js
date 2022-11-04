import { Outlet } from "react-router-dom";

import React from "react";

const Book = function () {
  return (
    <>
      <h1>Your first book</h1>
      <Outlet />
    </>
  );
};

export default Book;
