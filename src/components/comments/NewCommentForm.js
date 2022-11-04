import { Fragment, useEffect, useRef } from "react";

import classes from "./NewCommentForm.module.css";

import useHttp from "../../hooks/use-http";

import { useLocation } from "react-router-dom";

import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
  // const commentTextRef = useRef();

  // const { status, sendRequest, data, error } = useHttp(addComment);

  // const { onAddComment } = props;

  // useEffect(() => {
  //   if (status === "completed" && !error) {
  //     onAddComment();
  //   }
  // }, [status, error, onAddComment]);

  // console.log(data);

  // const submitFormHandler = (event) => {
  //   event.preventDefault();
  //   const enteredValue = commentTextRef.current.value;
  //   console.log(enteredValue);

  //   sendRequest({
  //     commentData: enteredValue,
  //     quoteId: props.id,
  //   });

  //   console.log(commentTextRef.current.value, props.id);

  // optional: Could validate here

  // send comment to server
  // };
  // console.log(props.id);

  const commentTextRef = useRef();
  const { data, sendRequest, status } = useHttp(addComment);

  // console.log(data);

  const { onAddComment } = props;

  useEffect(() => {
    if (status === "completed") {
      onAddComment();
    }
  }, [sendRequest, data]);

  const submitFormHandler = function (e) {
    e.preventDefault();

    const enteredValue = commentTextRef.current.value;

    sendRequest({
      commentData: enteredValue,
      quoteId: props.id,
    });
  };

  return (
    <Fragment>
      {/* {status === "pending" && (
        <div>
          <LoadingSpinner />
        </div>
      )} */}
      <form className={classes.form} onSubmit={submitFormHandler}>
        <div className={classes.control} onSubmit={submitFormHandler}>
          <label htmlFor="comment">Your Comment</label>
          <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Comment</button>
        </div>
      </form>
    </Fragment>
  );
};

export default NewCommentForm;
