/*
4. Capitalize Words
Write a program that accepts a string as input, capitalizes the first letter of each word in the 
string, and then returns the result string.

*/
let sentence = " a good tractor , a happy farmer"

function capitalizeWords(input){

input = input.trim()

let sentenceArray = input.split(" ")
let newSentence = []

for(let word of sentenceArray){
    word = word.split("")
    word[0] = word[0].toUpperCase()
    word = word.join("")
    newSentence.push(word)
}
newSentence = newSentence.join(" ")

 return console.log(newSentence)
}

capitalizeWords(sentence)


