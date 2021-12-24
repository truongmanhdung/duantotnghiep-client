import React from 'react';
import Router from './routes';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
      <Router />
    </div>
  );
}

export default App;
