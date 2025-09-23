import React from "react";
import "./commentCard.css";

const CommentCard = ({ comment, onDelete }) => {
  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      onDelete(comment.id);
    }
  };

  return (
    <div className="comment-card">
      {/* Context */}
      <div className="comment-context">
        <span className="comment-amendment">{comment.amendment}</span>
        <span className="separator">•</span>
        <span>{comment.section}</span>
      </div>

      {/* Title & Date */}
      <div className="comment-header">
        <h3 className="comment-title">{comment.postTitle}</h3>
        <span className="comment-date">{comment.date}</span>
      </div>

      {/* Body */}
      <p className="comment-text">{comment.text}</p>

      {/* Footer (Status + Delete) */}
      <div className="comment-footer">
        <div className="comment-status">
          {comment.status === "SEEN" ? (
            <span className="status-analyzed">✔ SEEN</span>
          ) : (
            <span className="statu-pending">⏳ Pending</span>
          )}
        </div>

        <button
          className="delete-btn"
          onClick={handleDeleteClick} // ✅ Delete handler
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
};

export default CommentCard;
