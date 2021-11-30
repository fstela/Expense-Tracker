import './ExpenseItem.css';
import Card from './UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
  return (
    <Card className="expense-item"> 
    <ExpenseDate date={props.date}/>
    {/* className for JSX as class is reserved */}
      {/* <div>{props.date.toISOString()}</div> */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
