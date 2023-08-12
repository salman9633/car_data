import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../store'

function CarList() {
  const dispach = useDispatch()

  const cars = useSelector(({ cars: { carsData, searchTerm } }) => {
    return carsData.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()))
  })


  function handleDeleteCar(car) {
    dispach(removeCar(car.id));
  }

  const carList = cars.map((elem, index) => {
    return (
      <div key={elem.id} className="panel">
        <p>
          {elem.name} - ${elem.cost}
        </p>

        <button className="button is-danger" onClick={() => handleDeleteCar(elem)}>
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
