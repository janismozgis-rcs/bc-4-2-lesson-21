import { useState } from "react"

function Task5() {
    const [selectedCar, setSelectedCar] = useState('')

    const cars = ['vaz', 'zaz', 'gaz', 'maz', 'uaz', 'bmw']
    const changeCar = (e) => {
        setSelectedCar(e.target.value)
    }
    
    const carsList = []
    const selectedCars = selectedCar.split(' ')
    for (const index in cars) {
        const car = cars[index]
        let color = 'black'
        if (selectedCars.includes(car)) {
            color = 'red'
        }

        carsList.push(
            <li key={index} style={{color: color}}>{car}</li>
        )
    }
    
    return (
        <div>
            <h1>Task 5</h1>
            <p>Print out a list of cars (at least 5). Have a input field. Typing a car name in input field should highlight it. seperating car names in the input field should highlight all the cars</p>
            <ul>
                {carsList}
            </ul>
            <input value={selectedCar} onChange={changeCar} />
        </div>
    )
}
export default Task5