import React from 'react';
import Toolbar from './components/Toolbar.css';


const Movie = props => {
 return(
   
    <div > 
       <h3>{props.name}</h3>
       <p>{props.price} </p>
       <a href="props.img"><img className="img" src={props.img}  /></a>
    </div>
   
);

};

export default Movie;