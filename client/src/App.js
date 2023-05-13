import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Top10 from "./components/Top10/Top10";
import SearchResults from "./components/BreedSearchResults/SearchResults"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/top-10" element={<Top10 />} />
          <Route exact path="/breeds/search/:breedName" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </div>



  );
}

export default App;
