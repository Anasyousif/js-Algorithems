/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    let wordArray = text.split(' ')
    let maxlength = 0
    let result = ''

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxlength) {
            maxlength = wordArray[i].length
            result = wordArray[i]
        }
    }

    return result
}


function longestWord(text) {
    var result = text.split(' ').reduce((maxlengthWord, currentWord) => {
        if (currentWord.length > maxlengthWord.length) {
            return currentWord
        } else {
            return maxlengthWord
        }
    }, "")
    return result
}

function longestWord(text) {
    var sortedArray = text.split(' ')
                          .sort((wordA, wordB) => wordB.length - wordA.length)
    return sortedArray[0]
}


module.exports = longestWord