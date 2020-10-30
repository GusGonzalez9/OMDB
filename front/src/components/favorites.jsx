import React from 'react'

 const Favorites = ({favorites,handleDelete})=>{
    return(
        <div>
        {favorites && favorites.map(fav =>(
            <div className=" col-xs-4 col-sm-4 col-lg-4 d-flex justify-content center m-auto pr-1">    
                 <div className="card">
                 <div className="card-body">
                <p>{fav.title}</p> 
                <img src={fav.poster}  className="rounded"/>
               </div>
               <button onClick={()=>handleDelete(fav.id)} >Remove Favorites</button> 
               </div>
               </div>

        ))}
        </div>
    )
}
export default Favorites


