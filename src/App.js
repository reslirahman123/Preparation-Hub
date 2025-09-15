
import TransactionDetails from "./components/TransactionDetails";


function App() {
  const handleTransactionSubmit = (data) => {
    console.log('Transaction submitted:', data);
    alert('Transaction details submitted successfully!');
  };

  const handleTransactionCancel = () => {
    console.log('Transaction cancelled');
    alert('Transaction cancelled');
  };

  return (
    <div>
      {/* <TodoList/> */}
      {/* <HideAndShow />
      <FetchCall />
      <ProductList />
     */}
      {/* <UseReducer />  */}
    {/* <Users /> */}
    {/*
    <Circles />
    <Button /> */}
    {/* <User /> */}
    {/* <UserCopy /> */}
    {/* <HideAndShow /> */}
    {/* <TrafficSignal /> */}
    <TransactionDetails 
      onSubmit={handleTransactionSubmit}
      onCancel={handleTransactionCancel}
    />
    </div>
    
  );
}

export default App;
