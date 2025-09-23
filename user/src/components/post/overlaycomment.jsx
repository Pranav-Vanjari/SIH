import React from "react";
import ReactDOM from "react-dom";
import PDFViewer from "./pdfviewer";
import CommentForm from "./commentForm";
import "./overlaycomment.css";

const OverlayModal = ({ show, onClose, pdfUrl,setComments }) => {
  if (!show) return null;

  const portalTarget = document.getElementById("overlay-root");
  if (!portalTarget) return null;

  return ReactDOM.createPortal(
    <div className="overlay" onClick={onClose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <div className="overlay-body">
          <div className="overlay-left">
            <PDFViewer fileUrl={pdfUrl} />
          </div>
          <div className="overlay-right">
            <CommentForm setComments={setComments} />
          </div>
        </div>
      </div>
    </div>,
    portalTarget
  );
};

export default OverlayModal;
