// Write your code here
import './index.css'

const TransactionItem = props => {
  const {item, dele} = props
  const {title, amoun, displayText, id} = item

  const del = () => {
    dele(id)
  }

  return (
    <div className="option">
      <p>{title}</p>
      <p>Rs{amoun}</p>
      <p>{displayText}</p>
      <button data-testid="delete" onClick={del}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </div>
  )
}
export default TransactionItem
