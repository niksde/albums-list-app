import React from "react";

export default function Navbar({ title, RenderRightComponent }) {
  return (
    <header className="App-container">
      <div className="App-header container">
        {title} {RenderRightComponent && RenderRightComponent}
      </div>
    </header>
  );
}
