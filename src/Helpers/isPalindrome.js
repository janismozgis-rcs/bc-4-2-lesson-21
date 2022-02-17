function isPalindrome(word) {
    word = word.toUpperCase().replace(/ /g, '')

    return word == word.split('').reverse().join('')
}

export default isPalindrome