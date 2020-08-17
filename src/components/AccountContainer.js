import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";



class AccountContainer extends Component {


  buildTransaction = () => {
    // console.log(this.props.transactions)
    return this.props.transactions.map(transaction => {
      return <TransactionsList transaction={transaction} key={transaction.id}/>
    })
  }

  render() {
    
    return (
      <div>
        <Search search={this.props.search}/>
        <AddTransactionForm addTrans={this.props.addTrans}/>
        
        {this.buildTransaction()}
      </div>
    );
  }
}

export default AccountContainer;
