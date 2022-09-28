import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [apiData, setApiData] = useState({})
  const apiKey = '537a4a8b666eff5ba82510cb7241c3da'
  const fetchApiReq = async () => {
    const apifetch = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`)
    const makichut = await apifetch.json()
    setApiData(makichut)
  }
  useEffect(() => {
    fetchApiReq()
  }, [])
  if (apiData) {
    console.log(apiData)
  }
  return (
    <div>
      <div className=" bg-slate-700 pl-6 text-4xl pt-5 font-serif pb-5">
        <h1 className="text-red-600">
          Vega<span className="text-white">Films</span>
        </h1>
        <div className="">
         <input type="text" placeholder="Search" className="rounded-md text-xl pl-2  "/>
     </div>
     </div>
      <div className="flex">
        <div className="w-100 p-5 h-10">
          <img
            src="https://image.tmdb.org/t/p/w500/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg "
            alt=" Fall"
            className="rounded-2xl"
          />
          <h3 className="bg-slate-600 text-center p-2  text-2xl text-green-400 font-serif drop-shadow-2xl rounded-md">
            Fall
          </h3>
        </div>
      </div>
    </div>
  );
}
