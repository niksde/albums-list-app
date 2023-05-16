import React from "react";

export default function Navbar({ title, RenderRightComponent }) {
  return (
    <header className="App-header">
      {title} {RenderRightComponent && RenderRightComponent}
    </header>
  );
}
