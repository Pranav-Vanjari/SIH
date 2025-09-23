import React from "react";
import "./pdfviewer.css";

const PDFViewer = ({ fileUrl }) => {
  if (!fileUrl) {
    return <div className="text-center">No PDF provided.</div>;
  }

  return (
    <div className="pdf-container">
      <iframe src={fileUrl} title="PDF Viewer"></iframe>
    </div>
  );
};

export default PDFViewer;
