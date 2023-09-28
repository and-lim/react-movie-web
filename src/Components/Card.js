import react from "react";

const Card=(movie)=>{
   
    let img_path="https://image.tmdb.org/t/p/w500";
    return(
        <>
            <div className="movie flex flex-col items-stretch flex-1 shadow-lg rounded-2xl">
                <img src={img_path+movie.info.poster_path} className="poster"></img>
                <div className="movie-details p-3 flex flex-col justify-center bg-gray-900">
                    <div className="flex flex-row justify-between py-3 text-white-600">
                        <h4 className="title text-white">{movie.info.title}</h4>
                        <div className="ratings flex flex-col justify-center items-center gap-2">
                            <span className="rating-score text-xs text-green-200 ml-4">rating</span>
                            <p className="rating float-right left-2 rounded-lg border border-solid border-2 border-orange-800 px-2 bg-amber-400 text-black font-black">{movie.info.vote_average}/10</p>
                        </div>
                    </div>
                    <div className="release-date flex flex-row justify-between">
                        <div className="label-group">
                            <label className="text-cyan-300">Release Date:</label>
                            <h3 className="text-white">{movie.info.release_date}</h3>
                        </div>
                        <div className="popularity">
                            <label className="text-cyan-300">Popularity</label>
                            <h3 className="text-white">{movie.info.popularity}</h3>
                        </div>
                    </div>
                    <div className="movie-overview mt-5 text-center flex justify-center">
                        <button className="btn-overview text-gray-900 font-bold bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 py-2 px-4 rounded">
                            Overview
                        </button>
                        <div className="overview">
                            <h1 className="text-xl text-lime-300 underline underline-offset-8 font-bold text-start mb-5">Movie overview</h1>                        
                            <p className="flex justify-start text-justify">{movie.info.overview}</p>
                        </div>
                    </div>
      
                </div>
            </div>
        </>
    )
}
export default Card;