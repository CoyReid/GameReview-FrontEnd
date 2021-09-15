import { useEffect, useState } from "react";
import React from "react";
import ReviewForm from "./ReviewForm";
import CardContainer from "./CardContainer";

const MainPage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/games/sort_by_rating")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  const topThree = games.slice(0, 3);

  return (
    <div>
      <div className="main">
        <CardContainer games={topThree} />
      </div>
      <div className="form">
        <ReviewForm />
      </div>
    </div>
  );
};

export default MainPage;
