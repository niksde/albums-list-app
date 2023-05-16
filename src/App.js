import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchAlbums } from "./services/AlbumService";
import Home from "./pages/Home";
import AlbumDetails from "./pages/AlbumDetails";
import { randomString } from "./utils/randomString";

function App() {
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearchChange = (evnt) => {
    setSearch(evnt.target.value);
  };

  useEffect(() => {
    populateAlbums();
  }, []);

  const populateAlbums = async () => {
    const albums = await fetchAlbums();
    const items = [];
    albums.forEach((album) => {
      const item = items.find((item) => item.userId === album.userId);
      if (item) {
        item.count += 1;
        item.titles.push({
          id: album.id,
          name: album.title,
          seen: false,
        });
      } else {
        items.push({
          userId: album.userId,
          name: randomString(3),
          count: 1,
          titles: [{ id: album.id, name: album.title, seen: false }],
        });
      }
    });
    setAlbums(items);
  };

  const handleTitleClick = (userId, id) => {
    const albumsCopy = JSON.parse(JSON.stringify(albums));
    const album = albumsCopy.find((album) => album.userId === userId);
    const title = album.titles.find((title) => title.id === id);
    if (title.seen === false) {
      album.count -= 1;
      title.seen = true;
    }
    setAlbums(albumsCopy);
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/album/:userId"
            render={() => (
              <AlbumDetails albums={albums} onTitleClick={handleTitleClick} />
            )}
          />
          <Route path="/" render={() => <Home albums={albums} search={search} onSearchChange={handleSearchChange} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
