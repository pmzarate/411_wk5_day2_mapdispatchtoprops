export const ADD_CAR = "ADD_CAR";
export const REMOVE_CAR = "REMOVE_CAR";


export const addCar = (newCar) => {
    return {
        type: 'ADD_CAR',
        value: newCar
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}