import React , {useState}from 'react';
import Toolbar from './components/Toolbar.css';

function AddMovie ()
 {
  
    const[name,setName]=useState('');
    const[price,setPrice]=useState('');

    const updateName =(e) => {
        setName(e.target.value);
    }
    const updatePrice =(e) => {
        setName(e.target.value);
    }
    const addMovie =e =>{
       e.preventDefault();


    }



  return(
      <form className="toolbar__addMovies">
        <input type="text" name="name" value={name} onChange={updateName} />
        <input type="text" name="price" value={price} onChange={updatePrice} />
        <button> Submit</button>
       

      </form>
  );

}
export default AddMovie;