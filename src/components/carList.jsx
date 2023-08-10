import React from 'react'
import { useSelector } from 'react-redux'

function CarList() {
  const cars=useSelector(state=>{
    return state.cars.carsData
  })

  function handleDeleteCar(){
    
  }

  const carList=cars.map((elem,index)=>{
    return(
      <div key={elem.id} className="panel">
        <p>
          {elem.name} - ${elem.cost}
        </p>

      <button className="button is-danger" onClick={()=>handleDeleteCar(elem)}>
        Delete
      </button>
      </div>
    )
  })
  return (
    <div className='car-list'>
  {carList}      
    </div>
  )
}

export default CarList
