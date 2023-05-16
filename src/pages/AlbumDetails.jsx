import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import Title from "../components/Title";

export default function AlbumDetails({ albums, onTitleClick }) {
  const location = useLocation();
  const userId = parseInt(location.pathname.split("/")[2]);
  const album = albums.find((album) => album.userId === userId);

  const onClick = (id) => {
    onTitleClick(userId, id);
  };

  return (
    <div>
      <Navbar title="Logo" />
      {album && <h3>{`${album.name} ${album.userId}`}</h3>}
      {album?.titles.map((title) => (
        <Title
          title={title.name}
          seen={title.seen}
          key={title.id}
          onClick={() => onClick(title.id)}
        />
      ))}
    </div>
  );
}
