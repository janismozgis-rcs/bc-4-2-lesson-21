function isAnagram(word1, word2) {
    word1 = word1.toUpperCase().replace(/ /g, '').split('').sort().join('')
    word2 = word2.toUpperCase().replace(/ /g, '').split('').sort().join('')

    return word1 == word2
}

export default isAnagram