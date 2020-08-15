import React from "react";
import login from "./login/login.css";
import auth from "./auth";
import { Line } from 'react-chartjs-2';
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
        b: "CAD",
        loading : true,
        ratesarr:[],
        fetched: false,
        data: {
          labels: [1, 2, 3],
          datasets: [{
              data: [5, 6, 7]
          }]
      }

    }
  }


    async handleSubmit(event){
       event.preventDefault();
        const start = document.getElementById("start");
        const end = document.getElementById("end");
        const pp =document.getElementById("symbol").value;
        const bb =document.getElementById("B").value;
        let  s=start.value;
        let e=end.value;
        let messages = [];

        const start_at = new Date(s);
        const end_at = new Date(e);




      if(pp==""|| bb==""|| s==""|| e==""){

        toast.error("please select StartDate ((and)) EndDate ((and)) Symbol ((and)) Base " , {position:"top-center"});
        return;
        }


        if (start_at > end_at) {
          toast.error("Please start date must be before end date", {
            position: "top-center"
          });
          return;
        }






        const url =`https://api.exchangeratesapi.io/history?start_at=${s}&end_at=${e}&base=${bb}&symbols=${pp}`;

        /*let msg = [];
        if (s==null || s==='') {
          console.log("jhhj");
          //alert('date is empty');

          messages.push("Enter your name please!!");

        }*/

        const response = await fetch(url);
        const d = await response.json();
        const labels = Object.keys(d.rates);
        const valuePairs = Object.values(d.rates);
        var values = []
        for (var x in valuePairs) {
          values.push(valuePairs[x][pp])
        }

        const data = {
          labels: labels,
          datasets: [{
              data: values
            }
          ]
        }




        this.setState({ratesarr:d.rates, loading:false, fetched: true, data: data , b:bb});
        let arr= d.rates ;



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
  const array= this.state.ratesarr;
  var rat = [];
  for (var x in array) {


  }
  const pp =document.getElementById("symbol");
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
  <Line data={this.state.data} />




 {Object.entries(arr).map(([date,va])=>(

      <div  style={lstyle}>


            <div>{date}</div>


             <div>{this.state.b}</div>


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
            name="Date"
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
            list="currencies"
            required
          />


            <h1>BASE : </h1>
            <input
              id="B"
              type="text"
              name=""
              list="currencies"
              required
            />
          <br/><br/>
          <datalist id="currencies">
            <option value="CAD"></option>
            <option value="HKD"></option>
            <option value="ISK"></option>
            <option value="PHP"></option>
            <option value="DKK"></option>
            <option value="HUF"></option>
            <option value="CZK"></option>
            <option value="AUD"></option>
            <option value="RON"></option>
            <option value="SEK"></option>
            <option value="IDR"></option>
            <option value="INR"></option>
            <option value="BRL"></option>
            <option value="RUB"></option>
            <option value="HRK"></option>
            <option value="JPY"></option>
            <option value="THB"></option>
            <option value="CHF"></option>
            <option value="SGD"></option>
            <option value="PLN"></option>
            <option value="BGN"></option>
            <option value="TRY"></option>
            <option value="CNY"></option>
            <option value="NOK"></option>
            <option value="NZD"></option>
            <option value="ZAR"></option>
            <option value="USD"></option>
            <option value="MXN"></option>
            <option value="ILS"></option>
            <option value="GBP"></option>
            <option value="KRW"></option>
            <option value="MYR"></option>
            <option value="EUR"></option>
          </datalist>
          <button className="button" type="submit" onClick={this.handleSubmit} >
           GO
          </button>



    </form>

    <ToastContainer position="top-center"/>
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
