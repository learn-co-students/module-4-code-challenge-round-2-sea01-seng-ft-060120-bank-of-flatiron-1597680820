import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {
  state = {
    transactions: [],
    searchTerm: ''
  }

  fetchTransactions = () => {
    return fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(json => this.setState({
      transactions: json,
    }))
  }
  componentDidMount(){
    this.fetchTransactions()
  }

  // filterSearch = (e) => {
    //   this.setState({
    //     searchTerm: e.target.value
    //   })
    // }
  

  search = () => {
    console.log(this.state.transactions)
    // return this.state.transactions.filter(transaction => transaction.includes(
    //   this.state.searchTerm
    // ))

    //
  }

  handleTransAdd = (e, trans) => {
    // console.log(e,trans)
    e.preventDefault()
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trans)
    })
    .then(res => res.json())
    .then(this.fetchTransactions())
  } 

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={this.state.transactions} addTrans={this.handleTransAdd} search={this.search()}/>
      </div>
    );
  }
}

export default App;
