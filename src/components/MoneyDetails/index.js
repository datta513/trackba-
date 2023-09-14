// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {bal, inc, exp} = props
  return (
    <div className="cont">
      <div className="manage">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">{bal}</p>
        </div>
      </div>
      <div className="manage cred">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p>your Income</p>
          <p data-testid="incomeAmount">{inc}</p>
        </div>
      </div>
      <div className="manage exp">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">{exp}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
