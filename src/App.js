
import User from "./components/HOC/User";
// import UserCopy from "./UserCopy";
// import Button from "./components/Button/Button";
import FetchCall from "./components/prep/FetchCall";
import HideAndShow from "./components/prep/HideAndShow";
// import Kiosk from "./components/Kiosk/Kiosk";
import Circles from "./components/Review/Review";
import TodoList from "./components/prep/TodoList";
import TrafficSignal from "./components/Traffic/TrafficSignal";
import UseReducer from "./components/UseReducer/UseReducer";
import Users from "./components/useFetch/Users";
import ProductList from "./components/customHooks/ProductList";
import useFetch from "./components/useFetch/useFetch";
import TransactionDetails from "./components/TransactionDetails/TransactionDetails";
import React, { useState } from 'react';


function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  const openTransactionModal = () => {
    setIsTransactionModalOpen(true);
  };

  const closeTransactionModal = () => {
    setIsTransactionModalOpen(false);
  };

  return (
    <div >
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
    <TrafficSignal />
    
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <button 
        onClick={openTransactionModal}
        style={{
          padding: '12px 24px',
          backgroundColor: '#555ab9',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        View Transaction Details
      </button>
    </div>

    <TransactionDetails 
      isOpen={isTransactionModalOpen} 
      onClose={closeTransactionModal} 
    />
    </div>
    
  );
}

export default App;
