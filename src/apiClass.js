import React from "react";

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

    async componentDidMount(){
        const url ="https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01&symbols=ILS,JPY";
        const response = await fetch(url);
        const d = await response.json();
        this.setState({ratesarr:d.rates, loading:false});
        const arr=this.state.ratesarr;
       
       console.log(d);
    }

render(){

  


    if (this.state.loading) { 
        return <div style={lstyle}>loading...</div>
  }

   /* if(!this.state.ratesarr.length ){
        return <div style={lstyle}>there is no result</div>
    }*/


    let arr= this.state.ratesarr ;

       
    


    return (
        
        
        <div>
    
    {arr.map(r=>(

         <div  style={lstyle}>
                
                
               <div>{r.date}</div>
                <div>{r.rates.ILS}</div>
                <div>{r.rates.JPY}</div>
                <div>{r.base}</div>
                           

         </div>


    ))}
    </div>)
  
}



}