import React from 'react';
import './App.css';
import auth from './auth';
import { withRouter } from 'react-router-dom'
import {createBrowserHistory} from 'history';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-bootstrap';

const style ={
   
    marginTop: 100,
   
   
    };

export const Admin = props => {
   
    return (
        <div className="container">
                <div className="row">
  



                <div  className="col-md-6 col-sm-6 col-lg-6">
                                            <button className="btn btn-primary btn-block" 
                                            style={style}
                                            onClick={() => {
                                                console.log('bb');
                                                props.history.push("/");
                                            }}>  {" "}Home  {" "}</button></div>
                <div className="col-md-6 col-sm-6 col-lg-6 "> <button  className="btn btn-primary btn-block" style={style} onClick={() => {
                                                console.log('bb');
                                                props.history.push("/Login");
                                            }}> logout </button>
                                            
                                        
                
        </div>
           


   
                      

                  
        
</div>

        
        </div>
      
        
    )
}
export default Admin;