import { useState } from "react"

function Task6() {
    const [selectedCar, setSelectedCar] = useState('')

    const cars = ['vaz', 'zaz', 'gaz', 'maz', 'uaz', 'bmw']
    const changeCar = (e) => {
        setSelectedCar(e.target.value)
    }
    
    let message = <h5 style={{color: 'red'}}>Car was not found</h5>
    if (cars.includes(selectedCar)) {
        message = <h5 style={{color: 'green'}}>Car was found</h5>
    }

    return (
        <div>
            <h1>Task 6</h1>
            <p>Have defined list of cars (at least 5). Have a input field and a h3 element. Typing a car name in input field should display "Car found" in green color if the car is found and "No car found" if the car is not found in red</p>
            {message}
            <input value={selectedCar} onChange={changeCar} />
        </div>
    )
}
export default Task6