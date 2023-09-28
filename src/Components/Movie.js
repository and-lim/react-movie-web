import { getDefaultNormalizer } from "@testing-library/react";
import React,{useState,useEffect} from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Footer from "./Footer"


let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["Popular","Theatre","Kids","Drama","Comedie"];


const Movie=()=>{
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);
    const [search,setSearch]=useState();

    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            setData(data.results);
        });
    },[url_set])

    const getData=(movieType)=>{
        if(movieType=="Popular")
        {
            url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
        }
        if(movieType=="Theatre")
        {
            url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_key;
        }
        if(movieType=="Kids")
        {
            url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
        }
        if(movieType=="Drama")
        {
            url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
        }
        if(movieType=="Comedie")
        {
            url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
        }
        setUrl(url);

    }
    const searchMovie=(evt)=>{
        if(evt.key=="Enter")
        {
            url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
            setUrl(url);
            setSearch(" ");
        }
    }
    return(
        <>
         <Navbar/>

            <section className="movie-bg h-full py-16">
                <h1 className="text-center text-white">Select Category:</h1>
                    <div className="header mx-auto">
                        <nav>
                            <ul>
                                {
                                    arr.map((value,pos)=>{
                                        return(
                                            <li><a href="#" key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                                        )
                                    })
                                }
                            
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="containers mx-auto search-bar my-5">
                    {/* <form>
                            <div className="search-btn w-full z-10">
                                <input type="text" placeholder="Enter Movie Name" 
                                className="inputText" onChange={(e)=>{setSearch(e.target.value)}} 
                                value={search} onKeyPress={searchMovie}>
                                </input>
                                <button><i className="fas fa-search"></i></button>
                            </div>
                        </form> */}
                        
                        <form className="w-96 mx-auto">   
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search"  onChange={(e)=>{setSearch(e.target.value)}} 
                                    value={search} onKeyPress={searchMovie} class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Movie" />
                                <button type="submit" class="text-black absolute right-2.5 bottom-2.5  bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                            </div>
                        </form>

                    </div>

                    <div className="containers mx-auto grid gap-6 grid-cols-1 lg:grid-cols-4">
                        {
                            (movieData.length==0)?<p className="text-3xl Notfod text-red-400 font-bold">Not Found</p>: movieData.map((res,pos)=>{
                                return(
                                    <>
                                     
                                        <Card info={res} key={pos}/>
                                 
                                    </>
                                )
                            })
                        }
                    </div>
                
            </section>

            <Footer/>
        </>
    )
}
export default Movie;