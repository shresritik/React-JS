import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";
import database from "./firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);
  return (
    <div className="tinderCard_cardContainer">
      {people.map((people) => (
        <TinderCard
          className="swipe"
          key={people.name}
          preventSwipe={["up", "down"]}
        >
          <div
            className="card"
            style={{ backgroundImage: `url(${people.url})` }}
          >
            <h3>{people.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
