import React, { useState } from "react";
import Header from "./components/post/header";
import PostsSection from "./components/postSection";
import MyComment from "./components/myComment/myComment";
import "./Dashboard.css";

const Dashboard = () => {

    const [comments, setComments] = useState([
    {
      id: 1,
      text: "I think the new GST deadline is great for small businesses, but the new digital process needs more clear step-by-step guidance.",
      postTitle: "THE COMPANIES ACT, 2013",
      amendment: "Draft Chapter #001",
      section: "Section 3.2: Digital Filing",
      date: "Oct 2, 2023",
      status: "SEEN"
    },
    {
      id: 2,
      text: "The new company registration process is a welcome change. However, I'm concerned about server stability during peak hours.",
      postTitle: "THE COMPANIES ACT, 2008",
      amendment: "Draft Chapter #002",
      section: "Section 5.1: System Requirements",
      date: "Sep 29, 2023",
      status: "SEEN"
    },
    {
      id: 3,
      text: "This seems like a positive step forward. I just want to ask if there will be any training sessions or webinars for the new digital process.",
      postTitle: "THE COMPANIES ACT, 2008",
      amendment: "Draft Chapter #001",
      section: "Section 3.2: Digital Filing",
      date: "Sep 28, 2023",
      status: "Pending"
    }
  ]);

  // Delete function
  const handleDeleteComment = (id) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      setComments(comments.filter((comment) => comment.id !== id));
    }
  };

  const [active, setActive] = useState("Posts");

  const handleNavClick = (section) => {
    setActive(section);
  };

  return (
    <div className="dashboard-container">
      {/* Pass active + click handler into header */}
      <Header handleNavClick={handleNavClick} active={active} text ={active} />

      <div className="dashboard-grid">
        {/* Conditional rendering */}
        {active === "Posts" && <PostsSection comments={comments} setComments={setComments} />}
        {active === "Comments" && <MyComment handleDeleteComment={handleDeleteComment} comments={comments}  />}
      </div>
    </div>
  );
};

export default Dashboard;
