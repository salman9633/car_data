import { useState } from 'react'
import './App.css'
import CarForm from './components/carForm';
import CarList from './components/carList';
import CarSearch from './components/carSearch';
import CarValue from './components/carValue';

function App() {
  // const [count, setCount] = useState(0)

  return (
   <div className='container is-fluid'>
      <CarForm></CarForm>
      <CarSearch></CarSearch>
      <CarList></CarList>
      <CarValue></CarValue>
   </div>
  )
}

export default App
