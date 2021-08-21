import "./Expenseitem.css";
import Expensedate from "./Expensedate";
import Card from "./Card";
function Expenseitem(props) {
  return (
    <Card className="expense_item">
      <Expensedate date={props.date} />
      <div className="expense_item_description">
        <h2>{props.title}</h2>
        <div className="expense_item_price">${props.amount} </div>
      </div>
    </Card>
  );
}
export default Expenseitem;
