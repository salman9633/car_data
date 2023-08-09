import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changesearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state, action) {
            //action.paylod==={name:'any',cost:5}
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid
            })
        },
        removeCar(state, action) {
            //action.payload=== id of the car we want to remove
            const updated = state.cars.filter((car) => {
                return car.id !== action.payload
            })
            state.cars = updated
        }
    }
})

export const { addCar, changesearchTerm, removeCar } = carsSlice.actions
export const carsReducer = carsSlice.reducer 