// David Alexis Lozano Clavijo
// 20221578010

import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Table from './components/Table';

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get(`http://localhost:3000/api`);
    setArray(response.data);
    console.log(response.data)
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Table>{array}</Table>
    </>
  )
}

export default App
