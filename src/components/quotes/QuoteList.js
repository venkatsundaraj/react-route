import { Fragment } from "react";

import { useLocation, useNavigate } from "react-router-dom";

// import classes from "./QuoteList.module.css";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortedQuotes = function (quotes, ascending) {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  console.log(props);
  const history = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isStartingAscending = queryParams.get("sort") === "asc";

  const sortedItems = sortedQuotes(props.quotes, isStartingAscending);
  console.log(props.quotes);

  const sortButtonHandler = function () {
    history(`/quotes?sort=${isStartingAscending ? "desc" : "asc"}`);
    console.log(location);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortButtonHandler}>
          {" "}
          Sort {isStartingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedItems.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
