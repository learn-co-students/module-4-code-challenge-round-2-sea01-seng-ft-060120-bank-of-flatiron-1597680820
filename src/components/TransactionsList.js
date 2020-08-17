import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  // console.log(props.transaction)
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date: {props.transaction.date}</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description: {props.transaction.description}</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category: {props.transaction.category}</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount: {props.transaction.amount}</h3>
          </th>
        </tr>
        
        {/* render Transactions here */
        
        }
      </tbody>
    </table>
  );
};

export default TransactionsList;
