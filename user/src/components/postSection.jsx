import React, { useState } from "react";
import OverlayModal from "./post/overlaycomment";
import pdfFile from "../assets/Act.pdf";
import "./postsection.css";

const PostsSection = ({setComments}) => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const posts = [
    {
      id: 1,
      title: "THE COMPANIES ACT, 2013",
      body: "The MCA has extended the GST filing deadline for all businesses to October 31st, 2023.",
      date: "Oct 2, 2013",
      pdf: pdfFile,
    },
    {
      id: 2,
      title: "THE COMPANIES ACT, 2008",
      body: "The process for company registration has been simplified. The new process will be completely digital.",
      date: "Sep 28, 2008",
      pdf: pdfFile,
    },
  ];

  return (
    <div className="app-container">
      <div className="posts-section">
        <h2>MCA Posts</h2>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div>
              <h3 className="post-title">{post.title}</h3>
              <p>{post.date}</p>
              <p>{post.body}</p>
            </div>
            <button onClick={() => setSelectedPdf(post.pdf)}>Comment</button>
          </div>
        ))}

        <OverlayModal
          show={!!selectedPdf}
          onClose={() => setSelectedPdf(null)}
          pdfUrl={selectedPdf}
          setComments={setComments}

        />
      </div>
    </div>
  );
};

export default PostsSection;
