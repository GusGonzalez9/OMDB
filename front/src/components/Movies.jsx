import React from 'react'

import {Link} from 'react-router-dom'
const Movies = (props)=>{
    return(
        <div className="container">
            <h2 className="text-center ">Movies</h2>
        <div className="row">
         {props.movies && props.movies.map(movie => {
             return(<div className="col-xs-4 col-sm-4 col-lg-4 d-flex justify-content center m-auto pr-1" key={movie.imdbID} 
             ><div className="card"><img src={movie.Poster}  className="rounded"/>
                <div className="card-body">
                     <Link to={`/pelis/${movie.imdbID}`}
                ><h5 className="card-title">{movie.Title}</h5></Link></div></div>
              </div>)
        })}
        </div>
    </div>
    )
}
export default Movies

