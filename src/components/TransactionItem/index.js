// Write your code here
import './index.css'

const TransactionItem = props => {
  const {item} = props
  const {title, amoun, displayText} = item
  return (
    <div className="option">
      <p>{title}</p>
      <p>Rs {amoun}</p>
      <p>{displayText}</p>
    </div>
  )
}
export default TransactionItem
