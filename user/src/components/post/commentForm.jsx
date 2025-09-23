import React from "react";
import "./commentForm.css";

const CommentForm = ({setComments}) => {

  // const handleOnSubmit=()=>{
  //   let newinfo = {

  //   }
  // }
  return (
    <div className="comment-form">
      <h2>Submit Your Comment</h2>
      <form>
        <div className="form-group">
          <label>Chapters</label>
          <select>
            <option value="">Select Chapter</option>
            <option value="A">Chapter A</option>
            <option value="B">Chapter B</option>
            <option value="C">Chapter C</option>
            <option value="D">Chapter D</option>
          </select>
        </div>

        <div className="form-group">
          <label>Section</label>
          <select>
            <option value="">Select Section</option>
            <option value="1">Section 1</option>
            <option value="2">Section 2</option>
            <option value="3">Section 3</option>
            <option value="4">Section 4</option>
          </select>
        </div>

        <div className="form-group">
          <label>Comment</label>
          <textarea rows="6" placeholder="Enter your comment"></textarea>
        </div>

        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
