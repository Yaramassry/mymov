import React from 'react';
import './Toolbar.css';
import {Link} from 'react-router-dom';


const lstyle ={
color:'white',
margin:30,
};


const toolbar = props =>( 
    
<header className="toolbar">
    <nav className="navbar navbar-expand-lg navbar-danger ">


        
        <div className="btn btn-outline-light my-2 my-sm-0" ><h4 className="font"> MYMOV</h4></div>
         
       
        <div className="toolbar_navigation-item"> 
        
             <h3 className="font"> <a href="/">List Of Movies </a></h3>
       </div>

       <h4><Link className="font" style={lstyle} to="/login" >Login </Link></h4>
      <h4><Link  className="font" style={lstyle} to="/appLayout" >Admin </Link></h4>
            
    

    </nav>
</header>
    )

;
export default toolbar;