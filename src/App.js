import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const [category, setCategory] = useState('general')
  console.log('category :>> ', category);
  return (
    <NavBar setCategory={setCategory} />
  );
}

export default App;
