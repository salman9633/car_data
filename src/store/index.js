import { configureStore } from "@reduxjs/toolkit";
import {
    carsReducer,
    addCar,
    changesearchTerm,
    removeCar
} from "./slices/carsSlice";
import {
    formReducer,
    changeCost,
    changeName
} from "./slices/formSlice";

export const store = configureStore({
    reducer: {

        cars: carsReducer,
        form: formReducer
    }
})

export {
    addCar
    , changeCost
    , changeName
    , changesearchTerm
    , removeCar
    
}