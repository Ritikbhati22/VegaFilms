import { useEffect, useState } from "react";
import React from "react";

export default function Navbar(data) {
 
  let API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=537a4a8b666eff5ba82510cb7241c3da";

    const fetchApiData =  async (url) => {
try {
const res = await fetch(url);
const data = await res.json();
console.log(data);
Setresponse(data.results)


} catch (error) {
  
    console.log(error)
}
    }
    useEffect(() => {
 
        fetchApiData(API);
    }, [])

const [response,Setresponse] = useState([]);
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
