import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';

export const CategoryContext = createContext();
function App() {
  const [category, setCategory] = useState('laptop');
  
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <h1>Count : {category}</h1>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
