import { Link } from "react-router-dom";

import React, { Fragment } from "react";

import classes from "./MainNavigation.module.css";

const MainNavigation = function () {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>Great Quotes</div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link to="/quotes">AllQuotes</Link>
            </li>
            <li>
              <Link to="/new-quote">Add a Quote</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default MainNavigation;
