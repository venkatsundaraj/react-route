import { useNavigate } from "react-router-dom";

import React, { Fragment, useEffect } from "react";

import QuoteForm from "../components/quotes/QuoteForm";

import useHttp from "../hooks/use-http";

import { addQuote } from "../lib/api";

const NewQuote = function () {
  const history = useNavigate();

  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = function (item) {
    console.log(item);

    sendRequest(item);

    history("/quotes");
  };
  return (
    <Fragment>
      <QuoteForm isLoading={status} onAddQuote={addQuoteHandler} />
    </Fragment>
  );
};

export default NewQuote;
