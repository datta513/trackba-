// Write your code here
import './index.css'

const TransactionItem = props => {
  const {item} = props
  const {title, amoun, ty} = item
  return (
    <div className="option">
      <p>{title}</p>
      <p>{amoun}</p>
      <p>{ty}</p>
    </div>
  )
}
export default TransactionItem
