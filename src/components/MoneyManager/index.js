import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
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
  state = {
    balance: 0,
    income: 0,
    expence: 0,
    title: '',
    amoun: '',
    ty: 'INCOME',
    amlis: [],
  }

  tc = event => {
    this.setState(prev => ({
      title: event.target.value,
    }))
    console.log(event.target.value)
  }

  amc = event => {
    this.setState(prev => ({amoun: event.target.value}))
    console.log(event.target.value)
  }

  typc = event => {
    this.setState(prev => ({ty: event.target.value}))
    console.log(event.target.value)
  }

  sub = event => {
    const {title, amoun, ty} = this.state
    const k = transactionTypeOptions.find(each => each.optionId === ty)
    const {displayText} = k
    console.log(k)
    event.preventDefault()
    const ni = {
      id: v4(),
      title,
      amoun,
      ty,
      displayText,
    }

    this.setState(prev => ({
      amlis: [...prev.amlis, ni],
      title: '',
      amoun: '',
      ty: transactionTypeOptions[0].optionId,
    }))
  }

  bale = () => {
    console.log('enterd')
    const {amlis} = this.state
    let bal = 0
    let inc = 0
    let exp = 0
    amlis.forEach(each => {
      if (each.ty === transactionTypeOptions[0].optionId) {
        inc += parseInt(each.amoun)
      } else {
        exp += parseInt(each.amoun)
      }
    })
    bal = inc - exp
    console.log(bal)
    return bal
  }

  exp = () => {
    const {amlis} = this.state
    let exp = 0
    amlis.forEach(each => {
      if (each.ty === transactionTypeOptions[1].optionId) {
        exp += parseInt(each.amoun)
      }
    })
    return exp
  }

  income1 = () => {
    console.log('enterd')
    const {amlis} = this.state
    let inc = 0
    amlis.forEach(each => {
      if (each.ty === transactionTypeOptions[0].optionId) {
        inc += parseInt(each.amoun)
      }
    })
    return inc
  }

  render() {
    const {ty, amoun, title, amlis} = this.state
    const balance = this.bale()
    const income = this.income1()
    const expence = this.exp()

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
            <form className="form1" onSubmit={this.sub}>
              <h1>Add Transaction</h1>
              <label htmlFor="title">TITLE</label>
              <input type="text" id="title" value={title} onChange={this.tc} />
              <label htmlFor="amoun">AMOUNT</label>
              <input id="amoun" type="text" value={amoun} onChange={this.amc} />
              <label htmlFor="type">Type</label>
              <select id="type" value={ty} onChange={this.typc}>
                <option
                  value={transactionTypeOptions[0].optionId}
                  id={transactionTypeOptions[0].optionId}
                >
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

            <ul className="lisy">
              <li className="typein">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </li>
              {amlis.map(each => (
                <TransactionItem item={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
