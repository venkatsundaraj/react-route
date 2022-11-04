import { Fragment, useEffect } from "react";
import {
  useParams,
  Route,
  Routes,
  Outlet,
  Navigate,
  Link,
} from "react-router-dom";
import Comments from "../components/comments/Comments";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import useHttp from "../hooks/use-http";

import { getSingleQuote } from "../lib/api";

const DUMMY_DATA = [
  { id: "a1", author: "Yuzavsei", text: "Got the nobel prize for peace" },
  { id: "a2", author: "Muniba", text: "Shorted in Top 40 Ambassodor" },
];

const QuoteDetails = function () {
  const params = useParams();

  const { bookId } = params;

  const {
    data: loadedQuote,
    sendRequest,
    error,
    status,
  } = useHttp(getSingleQuote);

  console.log(loadedQuote);

  // const quote = data.find((item) => item.id === params.bookId);

  useEffect(() => {
    sendRequest(bookId);
  }, [bookId]);

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

  if (!loadedQuote) {
    return <p>No quote was found</p>;
  }

  return (
    <Fragment>
      <h1>QuoteDetails </h1>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Outlet />
      <div>
        <Link className="btn--flat" to={`/quotes/${loadedQuote.id}/comments`}>
          Add Comment
        </Link>
      </div>
    </Fragment>
  );
};

export default QuoteDetails;
