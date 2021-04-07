import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Review from '../views/Review'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{display:'flex',justifyContent:'space-around', flexDirection:'column',width:'95%', height:'90%',marginLeft:'2.5%'}}>
    <div className="home">
      <div className="HomeDescription">
      <h4>Batman Regresa</h4>
      <div style={{width:'40%'}}>
      <p>Batman vuelve de vacciones porque se estaba re aburriendo, asi que regreso a pelear</p>
      </div>

       
      <div>
      <Review rating={4}></Review>

      
      </div>

      <div style={{display:'flex',width:'25%',marginTop:'5px',justifyContent:'space-around'}}>
        <button className="buttonsCongratulations">
Ver Trailer
        </button>
        <Link to="/movie/tt0372784">
        <button className="buttonsCongratulations">
Mas Info
        </button>
        </Link>
      </div>
      
      </div>
      
    

    </div>
    <div style={{display:'flex', justifyContent:'flex-start',alignItems:'center'}}>
    <h4>MAS ESTRENOS</h4>

    </div>
    </div>

  );
}
 
//Poner un carousel abajo y un footer, hacer slide de la imagen de batman
//Añadir a favoritos, eliminar de favoritos
//Ver vista de favoritos
//solucionar espacio sobrado en la vista de register