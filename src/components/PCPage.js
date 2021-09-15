import React from 'react'
import CardContainer from './CardContainer'
import { useState, useEffect } from "react";

const PCPage = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/games/pc")
          .then((r) => r.json())
          .then(setGames);
    }, []);

    return (
    <div className="main">
      <CardContainer games={games}/>
    </div>
  );
}

export default PCPage
