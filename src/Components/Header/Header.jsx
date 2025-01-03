import React from "react";

export default function Header({ title, lineColor = "bg-black", titleColor = "#2C3E50" }) {
  return (
    <div className="text-center pt-4 headerComponent">
      <h2
        className="text-uppercase mb-3 fs-1 fw-bolder"
        style={{ color: titleColor }}
      >
        {title} component
      </h2>
      
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className={`line me-3 ${lineColor}`}></div>
        <i className="fa-solid fa-star"></i>
        <div className={`line ms-3 ${lineColor}`}></div>
      </div>
    </div>
  );
}
