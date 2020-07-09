import React from 'react';
import './Footer.css';

const Footer =()=> {
  return(
    <div className="main-footer">
        
           <div className="row">
               {/*c1*/}
            
          
           <div className="col">
           <h3>Survices :</h3>
                   <ul className="list-unstyled">
                       <li>Latest movies </li>
                       <li>All categories </li>
                       <li> good prices</li>
                    </ul>
           </div>
            {/*cl2*/}
           <div className="call">
                   <h3>Connect Us  :</h3>
                   <ul className="list-unstyled">
                       <li>mob : 0937463400 </li>
                       <li>e-mail : yaramassry@gmail.com </li>
                  </ul>
                  </div>
           </div>
          <hr/>
           <div className="row">
             <p className="col-sm"></p>
                 &copy;{new Date().getFullYear()} Connect Us| All Right Reserved | Terms Of service |Privacy

           </div>
        
   </div>
  )
            
    
}
export default Footer;