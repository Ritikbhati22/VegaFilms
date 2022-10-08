import React from "react";
import Navbar from "./componants/Navbar";
const API_KEY = 'api_key=537a4a8b666eff5ba82510cb7241c3da';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;
function App() {
  return (
    <div className="bg-slate-600 h-screen overflow-hidden">
      <Navbar />
    </div>
  );
}

export default App;
