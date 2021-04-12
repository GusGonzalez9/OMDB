import React from "react";
import Review from "../views/Review";
import { Link } from "react-router-dom";
import {fetchMovies} from '../state/movies'
import {useDispatch,useSelector} from 'react-redux'


export default function Home() {


  const dispatch = useDispatch()
  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        width: "90%",
        height: "90%",
        marginLeft: "5.0%",
      }}
    >
      <div style={{display:'flex', width:'60%',marginLeft:'20%', height:'8%', border:'none',borderRadius:'5px',justifyContent:'space-around',alignItems:'center'}}>
        <button className="buttonHome">Estrenos</button>
      </div>

      <div className="home">
        <div className="HomeDescription">
          <h4>Batman Regresa</h4>
          <div style={{ width: "40%" }}>
            <p>
              Batman vuelve de vacciones porque se estaba re aburriendo, asi que
              regreso a pelear por gil.
            </p>
          </div>

          <div>
            <Review rating={4}></Review>
          </div>

          <div
            style={{
              display: "flex",
              width: "25%",
              marginTop: "5px",
              justifyContent: "space-around",
            }}
          >
            <button className="buttonsCongratulations1">Ver Trailer</button>
            <Link to="/movie/tt0372784">
              <button className="buttonsCongratulations2">Mas Info</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "red",
          width: "100%",
          height: "130px",
        }}
      >
        <div className="CardCarousel"></div>
        <div className="CardCarousel"></div>
        <div className="CardCarousel"></div>
        <div className="CardCarousel"></div>
      </div> */}
    </div>
  );
}

//Poner un carousel abajo y un footer, hacer slide de la imagen de batman
//Añadir a favoritos, eliminar de favoritos
//Ver vista de favoritos
