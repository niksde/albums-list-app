import React from "react";

export default function Title({ title, seen, onClick }) {
  return (
    <div
      className="title"
      onClick={onClick}
      style={{ ...(seen ? { background: "#aeaeae", color: "white" } : {}) }}
    >
      {title}
    </div>
  );
}
