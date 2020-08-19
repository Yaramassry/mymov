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
        ratesarr2:[],
        ratesarr3:[],
        fetched: false,
        data: {
          labels: [1, 2, 3],
          datasets: [{
              data: [5, 6, 7]
          }]
      },
      data2: {
        labels: [1, 2, 3],
        datasets: [{
            data: [5, 6, 7]
        }]
    },
    data3: {
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
        const pp2 =document.getElementById("symbol2").value;
        const pp3 =document.getElementById("symbol3").value;
        const bb =document.getElementById("B").value;
        let  s=start.value;
        let e=end.value;
        let messages = [];

        const start_at = new Date(s);
        const end_at = new Date(e);



             if(s==""){
              toast.error("please Enter strat day !!!! " , {position:"top-center"});
              return;
              }
              if(e==""){
              toast.error("please Enter End day too !!!! " , {position:"top-center"});
              return;
              }

              if(pp==""){
              toast.error("where is your symbol !!!!?? " , {position:"top-center"});
              return;
              }
              
              if(bb==""){
                toast.error(" Dear user .... baase !! where is the baaase ? ? !!!" , {position:"top-center"});
                return;
                }

              if(pp2==""){
                 toast.error("enter symbol in symbol2 or Re-enter the base here PLZ " , {position:"top-center"});
                return;
              }

              if(pp3==""){
                toast.error("enter symbol in symbol3 or Re-enter the base here PLZ " , {position:"top-center"});
                  return;
                  }




              if (start_at > end_at) {
                toast.error("Please start date must be before end date", {position: "top-center"});
              return;
               }






        


        const url =`https://api.exchangeratesapi.io/history?start_at=${s}&end_at=${e}&base=${bb}&symbols=${pp2},${pp},${pp3}`;

        /*let msg = [];
        if (s==null || s==='') {
          console.log("jhhj");
          //alert('date is empty');

          messages.push("Enter your name please!!");

        }*/

        const response = await fetch(url);
        const d = await response.json();
        //const d2 = await response.json();
        const labels = Object.keys(d.rates);
        const valuePairs = Object.values(d.rates);

        //const labels2 = Object.keys(d2.rates);
        //const valuePairs2 = Object.values(d2.rates);

        var values = []
        for (var x in valuePairs) {
          values.push(valuePairs[x][pp])
        }

        var values2 = []
        for (var x2 in valuePairs) {
          values2.push(valuePairs[x2][pp2])
        }

        
        var values3 = []
        for (var x3 in valuePairs) {
          values3.push(valuePairs[x3][pp3])
        }

        const data = {
          labels: labels,
          datasets: [{
              data: values
            }
          ]
        }

        const data2 = {
          labels: labels,
          datasets: [{
              data: values2
            }
          ]
        }

        const data3 = {
          labels: labels,
          datasets: [{
              data: values3
            }
          ]
        }



        this.setState({ratesarr:d.rates,ratesarr2:d.rates,ratesarr3:d.rates, loading:false, fetched: true, data2:data2, data3:data3, 
          data: data , b:bb});
        //this.setState({ratesarr2:d.rates, loading:false, fetched: true, data2: data2 , b:bb});
        let arr= d.rates ;
       // let arr2= d2.rates ;



           auth.login();
            console.log("yy");
            messages.push("hi admin!");
            //this.props.history.push("/api2", {state: this.state});


            }


    async componentDidMount(){
      this.setState({loading:false});
   }


   
render(){
  const array= this.state.ratesarr;
  const array2= this.state.ratesarr2;
 
  //for (var x in array) { }
  //for (var x2 in array2) { }
  //const pp =document.getElementById("symbol");
 // console.log(p);
  if (this.state.loading)
        return <div style={lstyle}>loading...</div>
        console.log("ratesarr");

  console.log(this.state.ratesarr);
  if(this.state.fetched){
    let arr = this.state.ratesarr;
    let arr2 = this.state.ratesarr2;
    console.log(arr);
    console.log(arr2);
      return(
  <div>
  <Line data={this.state.data} />
  <br/>
  <Line data={this.state.data2} />
  <br/>
  <Line data={this.state.data3} />
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

          <h1>Symbol 1: </h1>
          <input
            id="symbol"
            type="text"
            name=""
            list="currencies"
            required
          /> 
            <h1>Symbol 2 : </h1>
          <input
            id="symbol2"
            type="text"
            name=""
            list="currencies"
            required
          />
             <h1>Symbol 3 : </h1>
          <input
            id="symbol3"
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
            <option value="NZD" ></option>
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
