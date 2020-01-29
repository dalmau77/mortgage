import React from 'react';




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: "",
      rate: "",
      term:"15",
    };
    this.updateState = this.updateState.bind(this);
    this.calculate = this.calculate.bind(this)
  }

  updateState(e) {
    this.setState({
      [e.target.name]:[e.target.value]

    })
   
  };

  calculate(e) {
    
    const principle = (this.state.balance);
    const rate = (this.state.rate) / 100 / 12;
    const term = (this.state.term) * 12;
  
    // const top = r * (1 + r) ** n
    // const bottom = (1 + r) ** n - 1
    var payment = (principle*(rate*Math.pow((1+rate ),term )/(Math.pow(1+rate,term)-1))).toFixed(2);
                          
    this.setState({submit: payment});
    // console.log(principle)
    // console.log(rate)
    // console.log(term)

  
   console.log(this.state)
  
  }
  




  render() {
    return (
      
      <div className='container'>
        <div name = "input" id="input">
        <h3>Mortgage Calculator</h3>
        <label htmlFor="">Loan Balance</label>
        <input type="number" name="balance" placeholder="Balance" value={this.state.balance} onChange={this.updateState} />
        <label>Interest Rate</label>
        <input type="number" name="rate" step="0.01" placeholder="APR" value={this.state.rate} onChange={this.updateState} />
        <label>Loan Term</label>
        <select name="term" value={this.state.term} onChange={this.updateState}>
          <option value="15">15</option>
          <option value="30">30</option>
        </select>
        <button name="submit" type="submit" onClick = {this.calculate}>Calculate</button>
        </div>
        <div id="output" name='output'> ${this.state.submit} is your payment.></div>
      </div>
    );
  }
}
