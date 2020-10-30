import axios from "axios"

//---------------MOVIES-------------------//

 const set = function(text){
     return {
         type : 'SET_MOVIE',
         movie : text 
     }
}
  //------------------MOVIE INDIVIDUAL--------//

 const setDato = function(text){
    return{
        type:"SET_LOGGIN",
        movie:text
    }
}
//------------USER REGISTER----------//

const setT = function(text){
    return{
        type:"SET_LOG",
        t : text
    }
}
//------------favorites---------//
const getFavs = function(text){
    return{
        type:"SET_GET_FAVORITES",
        favorites : text
    }
}

//----------------PERMANENCIA----------------//


//---------------MOVIES-------------------//
 export const fetchMovie = (movie)=>dispatch =>  {axios.get( `https://www.omdbapi.com/?apikey=20dac387&s=${movie}`)
  .then(response => response.data)
  .then(data => dispatch(set(data)))} 

  //------------------MOVIE INDIVIDUAL--------//
  export const fetchData = (movieId) => dispatch =>
  axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${movieId}`)
    .then(res => res.data)
    .then(datos => dispatch(setDato(datos)));

//------------USER REGISTER----------//
export const fetchUser = (data) => dispatch=>
axios.post("/api/register",data)  


//--------------LOGIN USER------------//
export const fetchT = (data)=>dispatch=>
axios.post("/api/login",data).then(res=> res.data).then(datos => dispatch(setT(datos))) 

export const fetchLogout = ()=>dispatch=>
axios.get("/api/logout").then(() => dispatch(setT({})))


export const fetchPermanencia = ()=>dispatch=>
axios.get("/api/me").then(res => res.data).then(user => dispatch(setT(user)))


//--------------------------Favorites----------------------


 export const AddFavorites = (data)=> ()=>
axios.post("/api/favorites",data)


export const getFavorites = (id)=>(dispatch)=>{return axios.get(`/api/favorites/${id}`).then(favorites => dispatch(getFavs(favorites.data)))}

export const deleteFavorites = (id) =>()=> {return axios.delete(`/api/favorites/${id}`)}