import { useState } from "react"

function Task4() {
    const [selectedCar, setSelectedCar] = useState('')

    const cars = ['vaz', 'zaz', 'gaz', 'maz', 'uaz', 'bmw']
    const changeCar = (e) => {
        setSelectedCar(e.target.value)
    }
    
    const carsList = []
    for (const index in cars) {
        const car = cars[index]
        let color = 'black'
        if (car == selectedCar) {
            color = 'red'
        }

        carsList.push(
            <li key={index} style={{color: color}}>{car}</li>
        )
    }
    
    return (
        <div>
            <h1>Task 4</h1>
            <p>Print out a list of cars (at least 5). Have a input field. Typing a car name in input field should highlight it</p>
            <ul>
                {carsList}
            </ul>
            <input value={selectedCar} onChange={changeCar} />
        </div>
    )
}
export default Task4