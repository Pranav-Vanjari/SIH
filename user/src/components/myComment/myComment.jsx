import React, { useState } from "react";
import CommentCard from "./commentCard";
import "./commentCard.css";

const MyComment = ( {handleDeleteComment,comments}) => {
  // Initial mock comments


  return (
    <div className="app-container">
      <div className="comments-wrapper">
        <h2 className="comments-heading">My Comments</h2>
        <div className="comments-list">
          {comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              onDelete={() => handleDeleteComment(comment.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyComment;
