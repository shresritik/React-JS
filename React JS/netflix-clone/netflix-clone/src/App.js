import React from "react";

import "./App.css";
import Row from "./Row";
import request from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        isLarge
        fetchUrl={request.fetchNetflixOriginals}
      />
      <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action" fetchUrl={request.fetchActionMovies} />
      <Row title="Adeventure" fetchUrl={request.fetchAdventureMovies} />

      <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Animation" fetchUrl={request.fetchAnimationMovies} />
      <Row title="Sci-fi" fetchUrl={request.fetchSci_fiMovies} />
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />

      <Row title="Thriller" fetchUrl={request.fetchThrillerMovies} />
      <Row title="Drama" fetchUrl={request.fetchDramaMovies} />
      <Row title="Crime" fetchUrl={request.fetchCrimeMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />

      <h4 className="footer">Developed by Ritik Krishna Shrestha</h4>
    </div>
  );
}

export default App;
