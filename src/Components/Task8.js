import { useState } from "react"
import isPalindrome from "../Helpers/isPalindrome"


function Task8() {
    const [word, setWord] = useState('')

    let message = <h3 style={{color: 'red'}}>Word {word} is not palindrome</h3>

    if (isPalindrome(word)) {
        message = <h3 style={{color: 'green'}}>Word {word} is palindrome</h3>
    } 

    if (!word) {
        message = <h3 style={{color: 'orange'}}>Please enter the word</h3>
    }

    return (
        <div>
            <h1>Task 8</h1>
            <p>Have a input feild. Entering a word in it should show a green or red message according to the fact if the word is or is not a palindrome</p>
            {message}
            <input value={word} onChange={(e) => setWord(e.target.value)} />
        </div>
    )
}
export default Task8