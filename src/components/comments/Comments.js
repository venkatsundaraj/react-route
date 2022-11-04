import { useState, useEffect } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

import useHttp from "../../hooks/use-http";

import { getAllComments } from "../../lib/api";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";

import CommentsList from "./CommentsList";

const Comments = () => {
  const params = useParams();

  const { bookId } = params;
  const [isAddingComment, setIsAddingComment] = useState(false);

  const {
    sendRequest,
    data: loadedData,
    status,
    error,
  } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(bookId);
  }, [bookId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = function () {};

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && (loadedData || loadedData?.length > 0)) {
    comments = <CommentsList comments={loadedData} />;
  }

  if (status === "completed" && !loadedData && loadedData?.length < 0) {
    comments = <p className="centered">No comments are added</p>;
  }

  console.log(loadedData);
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm onAddComment={addedCommentHandler} id={bookId} />
      )}
      <p>Comments...</p>
      {comments}
    </section>
  );
};

export default Comments;
