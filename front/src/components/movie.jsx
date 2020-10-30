import React from 'react'

 const Movie = ({Movie,isFavorite,handleFavorite})=>{
    return(
       <div className=" d-flex justify-content center ml-5 mt-4">
       <div className="card" key={Movie.imdbID}>
           <div className="card-body">
           <img src={Movie.Poster}  className="rounded"/>
           <h4 className="title mt-2 " >{Movie.Title}</h4>
               <button className="btn btn-warning" onClick={()=>handleFavorite(Movie.Title,Movie.Poster)}>{isFavorite? <p>Remove Favorite</p>:<p>Add Favorite</p>}</button>
                </div>
       </div> 
       </div>
    )
}
export default Movie

