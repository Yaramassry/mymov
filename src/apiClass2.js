import React from "react";

const lstyle ={
    color:'black',
    margin:300,
    fontSize: 100,
    };

export default class apiClass2 extends React.Component{
    render(){
      let arr = this.state.ratesarr;
      console.log(arr);
        return(
    <div>
    {Object.entries(arr).map(([date,value])=>(

        <div  style={lstyle}>


              <div>{date}</div>
               <div>{value.ILS}</div>
               <div>{value.JPY}</div>
               <div>EUR</div>


        </div>


   ))}
   </div>
        )}


















/* state = {
        loading : true,
        rate:null,
        rate2:null,
        rate3:null,
        rate4:null,
    }

    async componentDidMount(){
        const url ="https://api.exchangeratesapi.io/2010-02-12";
        const url2="https://api.exchangeratesapi.io/2010-06-12";
        const url3="https://api.exchangeratesapi.io/2020-06-1";
        const url4=" https://api.exchangeratesapi.io/latest?symbols=USD,GBP";
        const response = await fetch(url);
        const response2 = await fetch(url2);
        const response3 = await fetch(url3);
        const response4 = await fetch(url4);
        const d = await response.json();
        const d2 = await response2.json();
        const d3 = await response3.json();
        const d4 = await response4.json();
        this.setState({rate:d.rates , base:d.base , date:d.date, loading:false});
        this.setState({rate2:d2.rates , base2:d2.base , date2:d2.date, loading:false});
        this.setState({rate3:d3.rates , base3:d3.base , date3:d3.date, loading:false});
        this.setState({rate4:d4.rates , base4:d4.base , date4:d4.date, loading:false});
       console.log(d);
    }

render(){
    if (this.state.loading) {
        return <div style={lstyle}>loading...</div>
  }

    if(!this.state.rate || !this.state.rate2 || !this.state.rate3 || !this.state.rate4 ){
        return <div style={lstyle}>there is no result</div>
    }


    return <div style={lstyle}>

         <div>
                <div>{this.state.date}</div>
                <div>{this.state.rate.HRK}</div>
                <div>{this.state.base}</div>

                </div>
                <br/>
                <div>
                <div>{this.state.date2}</div>
                <div>{this.state.rate2.HRK}</div>
                <div>{this.state.base2}</div>

                </div>

                <br/>
                <div>
                <div>{this.state.date3}</div>
                <div>{this.state.rate3.HRK}</div>
                <div>{this.state.base3}</div>

                </div>

                <br/>
                <div>
                <div>{this.state.date4}</div>
                <div>{this.state.rate4.USD}</div>
                <div>{this.state.rate4.GBP}</div>
                <div>{this.state.base4}</div>

                </div>
    </div>
}

























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

*/
}
