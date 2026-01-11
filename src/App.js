import React from "react";
import Row from "./Row";
import "./App.css";
import requests from "./request";
import Nav from "./Nav";
import Banner from "./Banner";
function App() {
  return (
    <div className="App">
      {/* {Nav} */}
      {/* {Banner} */}
      <Nav />
      <Banner />
      <Row
        title="Netfilx Originals"
        fetchUrl={requests.fetchNetflixOrignals}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        isLargeRow={true}
      />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Moives" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
