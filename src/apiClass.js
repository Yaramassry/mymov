import React from "react";
import login from "./login/login.css";
import auth from "./auth";

const lstyle ={
    color:'black',
    margin:300,
    fontSize: 100,
    };

  

export default class apiClass extends React.Component{
    state = {
        loading : true,
        ratesarr:[],
       
    }
 
    handleSubmit = (event) => {
        event.preventDefault();
      
        let arr= this.state.ratesarr ;
        let messages = [];
        
      
        if(!this.state.ratesarr.length ==0)
    {
           auth.login();
            console.log("yy");
            messages.push("hi admin!");
            this.props.history.push("/apiClass2");
          
    }
        
            }
    

    async componentDidMount(){
        
        const start = document.getElementById("start");
        const end = document.getElementById("end");
        let  s=start.value;
        let e=end.value;
    
         
        const url ="https://api.exchangeratesapi.io/history?start_at=${s}&end_at=${e}&symbols=ILS,JPY";
        const response = await fetch(url);
        const d = await response.json();
        this.setState({ratesarr:d.rates, loading:false});
       // const arr=this.state.ratesarr;
       
       console.log(d);
    }

render(){

   
    if (this.state.loading)  
        return <div style={lstyle}>loading...</div>
  

  /*if(this.state.ratesarr.length ==0){
        return <div style={lstyle}>there is no result</div>
    }*/


  

    
 return (
     <div className="loginbox">
    <form method="GET" id="form">
  
          <h1>start at : </h1>
          <input
            id="start"
            type="date"
            name=""
           required
          />
          <br/>
          
          <h1>End at : </h1>
          <input
            id="end"
            type="date"
            name=""
            required
          />
          <br/><br/>
          <button className="button" type="submit" onClick={this.handleSubmit} >
           GO
          </button>



    </form>
   </div>
)
  
}

}


/*<div>
    
{Object.entries(arr).map(([date,value])=>(

     <div  style={lstyle}>
            
            
           <div>{date}</div>
            <div>{value.ILS}</div>
            <div>{value.JPY}</div>
            <div>EUR</div>
                       

     </div>


))}
</div>*/