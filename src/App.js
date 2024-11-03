import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses=[
    {id:'1', date: new Date(2023, 7, 15), title: 'Insurance', price: '50', location: 'Bangalore'},
    {id:'2', date: new Date(2023, 3, 25), title: 'Book', price: '20', location: 'Delhi'},
    {id:'3', date: new Date(2023, 10, 11), title: 'Pen', price: '5', location: 'Hyderabad'},
    {id:'4', date: new Date(2023, 1, 14), title: 'Laptop', price: '200', location: 'Mumbai'},
  ];
  return (
    <div>
      <h1>Let's get Started</h1>
      <p>I am Learning React</p>
      {
        expenses.map((expense, index) => {
          return (<ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
            location={expense.location}
          ></ExpenseItem>);
        })
      };
    </div>
  );
}

export default App;
