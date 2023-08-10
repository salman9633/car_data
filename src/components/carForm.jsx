import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addCar,
  changeCost,
  changeName
} from '../store'

function CarForm() {
  const dispach = useDispatch()
  const { name, cost } = useSelector(state => {
    return {
      name: state.form.name,
      cost: state.form.cost

    }
  })
  function handleNameChange(e) {
    dispach(changeName(e.target.value))
  }
  function handleCostChange(e) {
    const carCost = parseInt(e.target.value) || 0
    dispach(changeCost(carCost))
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispach(addCar({name:name,cost:cost}))
  }
  return (
    <div className='car-form panel'>
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="field">Name</label>
          <input type="text"
            className="input is-expanded"
            value={name || ''}
            onChange={handleNameChange} />
        </div>

        <div className="field">
          <label className="field">Cost</label>
          <input type="number"
            className="input is-expanded"
            value={cost || ''}
            onChange={handleCostChange} />
        </div>

        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>

    </div>
  )
}

export default CarForm
