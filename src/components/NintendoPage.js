import React from "react";
import CardContainer from "./CardContainer";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const NintendoPage = () => {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [firstFilter, setFirstFilter] = useState("all");
  const [secondFilter, setSecondFilter] = useState("all");

  useEffect(() => {
    fetch("http://localhost:9292/games/nintendo")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  const filteredGames = games.filter((game) => game.title.toLowerCase().includes(search.toLowerCase()))
  .filter((game) => {
    if (firstFilter === "all" || game.genre.toLowerCase() === firstFilter) {
      return true;
    }
    return false;
  })
  .filter((game) => {
    if (secondFilter === "all" || game.platform.toLowerCase() === secondFilter) {
      return true;
    }
    return false;
  })


  const genres = games.filter((value, index, arr) => arr.findIndex(game => (game.genre === value.genre)) === index).map(game => game.genre)
  const allGenres = ["All", ...genres]

  const platforms = games.filter((value, index, arr) => arr.findIndex(game => (game.platform === value.platform)) === index).map(game => game.platform)
  const allPlatforms = ["All", ...platforms]

  return (
    <>
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        onFirstFilterChange={setFirstFilter}
        onSecondFilterChange={setSecondFilter}
        firstFilter={firstFilter}
        secondFilter={secondFilter}
        genres={allGenres}
        platforms={allPlatforms}
      />
      <div className="main">
        <CardContainer games={filteredGames} />
      </div>
    </>
  );
};

export default NintendoPage;
