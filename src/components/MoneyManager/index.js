import {Component} from 'react'
import {V4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
export default class MoneyManager extends Component {
  state = {balance: 0, income: 0, expence: 0}

  render() {
    const {balance, income, expence} = this.state
    return (
      <div className="main">
        <div className="details">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span className="spec">MoneyManager</span>
          </p>
        </div>

        <div className="secondm">
          <MoneyDetails bal={balance} inc={income} exp={expence} />
        </div>

        <div className="details2">
          <div className="fcont">
            <form className="form1">
              <h1>Add Transaction</h1>
              <label htmlFor="title" value="title" onChange={this.tc}>
                TITLE
              </label>
              <input type="text" id="title" />
              <label htmlFor="amoun" value="amoun" onChange={this.amc}>
                Amount
              </label>
              <input id="amoun" type="text" />
              <label htmlFor="type" value="ty" onChange={this.typc}>
                Type
              </label>
              <select id="type">
                <option value={transactionTypeOptions[0].optionId}>
                  {transactionTypeOptions[0].displayText}
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <button type="Submit" className="but">
                Add
              </button>
            </form>
          </div>
          <div className="history">
            <h1>History</h1>
          </div>
        </div>
      </div>
    )
  }
}
