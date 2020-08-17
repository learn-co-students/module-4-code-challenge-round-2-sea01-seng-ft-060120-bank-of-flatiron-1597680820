import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: 0
  }

  onChanignTrans = (e) => {
    // console.log(e)
    // console.log(e.target)
    this.setState({
      [e.target.name]: e.target.value, //date
      [e.target.name]: e.target.value, //description
      [e.target.name]: e.target.value, //category
      [e.target.name]: e.target.value, //amont
    })
  }
  render() {
    // console.log(this.props.addTrans)
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => this.props.addTrans(e, this.state)}>
          <div className="inline fields" >
            <input type="date" name="date" onChange={this.onChanignTrans}/>
            <input type="text" name="description" placeholder="Description" onChange={this.onChanignTrans}/>
            <input type="text" name="category" placeholder="Category" onChange={this.onChanignTrans}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.onChanignTrans}
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
