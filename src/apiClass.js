import React from "react";
import login from "./login/login.css";
import auth from "./auth";

const lstyle ={
    color:'black',
    margin:300,
    fontSize: 100,
    };



export default class apiClass extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
        p: "EUR",
        loading : true,
        ratesarr:[],
        fetched: false

    }
  }


    async handleSubmit(event){
       event.preventDefault();
        const start = document.getElementById("start");
        const end = document.getElementById("end");
        const pp =document.getElementById("symbol");
        let  s=start.value;
        let e=end.value;


        const url =`https://api.exchangeratesapi.io/history?start_at=${s}&end_at=${e}&symbols=${this.state.p}`;
        const response = await fetch(url);
        const d = await response.json();
        this.setState({ratesarr:d.rates, loading:false, fetched: true , p:pp});
        let arr= d.rates ;
        let messages = [];


           auth.login();
            console.log("yy");
            messages.push("hi admin!");
            //this.props.history.push("/api2", {state: this.state});

            }


    async componentDidMount(){

        /*const start = document.getElementById("start");
        const end = document.getElementById("end");
        let  s=start.value;
        let e=end.value;


        const url ="https://api.exchangeratesapi.io/history?start_at=${s}&end_at=${e}&symbols=ILS,JPY";
        const response = await fetch(url);
        const d = await response.json();*/
        this.setState({loading:false});
       // const arr=this.state.ratesarr;

       //console.log(d);
    }

render(){

 // console.log(p);
    if (this.state.loading)
        return <div style={lstyle}>loading...</div>
        console.log("ratesarr");
  console.log(this.state.ratesarr);
  if(this.state.fetched){
    let arr = this.state.ratesarr;
    console.log(arr);
      return(
  <div>
  {Object.entries(arr).map(([date,value])=>(

      <div  style={lstyle}>


            <div>{date}</div>
            
             
             <div>EUR</div>


      </div>


 ))}
 </div>
      )}





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
            <br/>

          <h1>Symbol : </h1>
          <input
            id="symbol"
            type="text"
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
