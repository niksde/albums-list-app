import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Home({ albums, search, onSearchChange }) {
  const filteredAlbums =
    search.length > 0
      ? albums.filter((album) =>
          `${album.name} ${album.userId}`.toLowerCase().includes(search.toLowerCase())
        )
      : albums;

  return (
    <div>
      <Navbar
        title="Logo"
        RenderRightComponent={
          <input placeholder="Search" value={search} onChange={onSearchChange} />
        }
      />
      <ul className="notification-badges container">
        {filteredAlbums.map((album) => (
          <Card
            userId={album.userId}
            name={album.name}
            count={album.count}
            key={`userId-${album.userId}`}
          />
        ))}
      </ul>
    </div>
  );
}
