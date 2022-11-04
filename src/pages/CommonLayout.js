import { Outlet, Link } from "react-router-dom";

import { Fragment } from "react";

const CommonLayout = function () {
  return (
    <Fragment>
      <h1>This is common</h1>
      {/* <Link to="comments">All</Link> */}
      {/* <Outlet /> */}
    </Fragment>
  );
};

export default CommonLayout;
