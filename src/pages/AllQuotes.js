import { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";

import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import useHttp from "../hooks/use-http";

import { getAllQuotes } from "../lib/api";

import NoQuoteFound from "../components/quotes/NoQuotesFound";

const DUMMY_DATA = [
  { id: "a1", author: "Yuzavsei", text: "Got the nobel prize for peace" },
  { id: "a2", author: "Muniba", text: "Shorted in Top 40 Ambassodor" },
];

const AllQuotes = function () {
  const {
    data: loadedQuotes,
    sendRequest,
    error,
    status,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  console.log(loadedQuotes);

  if (status === "pending") {
    return (
      <div>
        <LoadingSpinner className="centered" />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuoteFound />;
  }

  console.log(loadedQuotes);
  return (
    <Fragment>
      <QuoteList quotes={loadedQuotes} />
    </Fragment>
  );
};

export default AllQuotes;
