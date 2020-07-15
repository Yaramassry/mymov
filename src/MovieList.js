import React , {useState} from 'react';
import Movie from './Movie';
import Toolbar from './components/Toolbar.css';
import Table from './Table';
import { render } from '@testing-library/react';
import auth from './auth';
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import "toastr";


class MovieList extends React.Component{

constructor(){
    super();
    this.state={
        visible: true,
     movies:[
        {
            img : require('./Photos/dump.jpg'),
            name: 'Dump & Dumper',
            price: '10$',
            id: 231243,
            
           
        },
        {
            name: 'Ted',
            price: '10$',
            id: 231224,
            img : require('./Photos/ted.jpg')
           
        },
        {
            name: 'Plus One',
            price: '10$',
            id: 233124,
            img : require('./Photos/plusOne.jpg')
           
        },
         {
        name: 'Harry Potter',
        price: '10$',
        id: 23124,
        img : require('./Photos/harry.jpg')
       
    },
    {
        name:'Game of thrones',
        price:'20$',
        id:2566124,
        img :require('./Photos/game.jpg')
    },
    
    {
        name:'Titanic',
        price:'25$',
        id:23520,
        img :require('./Photos/titanic.jpg')
    },
   {
        name:'Merage',
        price:'20$',
        id:23529,
        img : require('./Photos/merage.jpg')
    },
    {
        name:'Lacaca',
        price:'35$',
        id:235251,
        img : require('./Photos/lacasa.jpg')
    },
    {
        name:'MyDad',
        price:'34$',
        id:235245,
        img : require('./Photos/dad.jpg')
    },
    {
        name:'Inception',
        price:'20$',
        id:23524,
        img : require('./Photos/inception.jpg')
    }],
    s:'', 
    
    }}

    
  
updateSearch(event){
  this.setState({s : event.target.value})
 }


  toggle(){ this.setState({visible:false});
      

  }
  


render(){
  
    let filterdMov= this.state.movies.filter(

        (movie)=>{ return movie.name.toLowerCase().indexOf(this.state.s.toLowerCase())!== -1 })
    

        return(
       

            <div className="toolbar__Movies"> 
   
         <div>
           
               
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <form className="form-inline my-2 my-lg-0">
                   
                 

                 <div className="alert alert-success alert-dismissable">
                
                    <a href="#" className="close" data-dismiss="alert" aria-label="close" >&times;</a>
                    <strong>Info  !</strong> inter film name
                </div>
                    
                   
                    
                   
                    <button id="serch" class="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
                   
            
                
                </form>

               


            <ul className="navbar-nav mr-auto">
              
                <li className="nav-item dropdown">
                  <a  className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Types of Films
                         </a>
                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Comedy</a>
                                    
                                        <ul>
                                            <li className="nav-item dropdown"><a href="#">Dump and Dumper</a></li>
                                            <li className="nav-item dropdown"><a href="#">Ted</a></li>
                                            <li className="nav-item dropdown"><a href="#">Plus One</a></li>
                                        </ul>
                                

                            <a className="dropdown-item" href="#">Action</a>
                                            <ul>
                                            <li className="nav-item dropdown"><a href="#">Harry Potter</a></li>
                                            <li className="nav-item dropdown"><a href="#">Game of thrones</a></li>
                                            <li className="nav-item dropdown"><a href="#">Lacaca</a></li>
                                        </ul>
                                        
                            <a className="dropdown-item" href="#">Romantic</a>
                                        <ul>
                                            <li className="nav-item dropdown"><a href="#">Titanic</a></li>
                                        </ul>
                            <a className="dropdown-item" href="#">Drama</a>
                                        <ul>
                                            <li className="nav-item dropdown"><a href="#">Merage</a></li>
                                            <li className="nav-item dropdown"><a href="#">MyDad</a></li>
                                        </ul>
                    </div>
                  </li>
                  
              </ul>
           
              </div>
          </nav> 

       


          <div className="toolbar__m">
           
           {filterdMov.map(movie => (
               < Movie name={movie.name} price={movie.price} key={movie.id} img={movie.img}/>   ))}    
           <input  type="text" id="t" name="text" placeholder="Search by name" value={this.state.s}
             onChange={this.updateSearch.bind(this)} />
          </div>

           
              
            </div>
         
            <Table className="toolbar__table"/>
            
           </div>
        );
   
        }
    }

export default MovieList;