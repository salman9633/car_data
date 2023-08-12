import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changesearchTerm } from '../store'

function CarSearch() {
  const dispatch=useDispatch()
  function handleSearchTermChange(e){
    dispatch(changesearchTerm(e.target.value))
  }
  const searchTerm=useSelector((state)=>{
    return state.cars.searchTerm
  })
  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input 
        type="text"
        className='input'
        value={searchTerm}
        onChange={handleSearchTermChange}
        />
      </div>
    </div>
  )
}

export default CarSearch
