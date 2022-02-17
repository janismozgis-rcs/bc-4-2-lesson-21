import { useState } from "react"
import isAnagram from "../Helpers/isAnagram"

function Task7() {
    const [word1, setWord1] = useState('')
    const [word2, setWord2] = useState('')

    let message = <h3 style={{color: 'red'}}>Words {word1} and {word2} are not anagrams</h3>

    if (isAnagram(word1, word2)) {
        message = <h3 style={{color: 'green'}}>Words {word1} and {word2} are anagrams</h3>
    } 

    if (!word1 && !word2) {
        message = <h3 style={{color: 'orange'}}>Please enter both words</h3>
    }

    return (
        <div>
            <h1>Task 7</h1>
            <p>Have 2 inpuit fields. Have a 2h element. Typing in works in those input fields should show a green message "words are anagrams" in the h2 if the words are anangrams and red message "words are not anagrams" if they are not</p>
            {message}
            <input value={word1} onChange={(e) => setWord1(e.target.value)} />
            <input value={word2} onChange={(e) => setWord2(e.target.value)} />
        </div>
    )
}
export default Task7