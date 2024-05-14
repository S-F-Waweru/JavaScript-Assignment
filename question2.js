/* 
2. Password Generation:
 
  This function helps users create secure passwords based on their names.
  It takes the user's first and last names and combines the first 3 characters of the
  first name with the last 3 characters of the last name,
  then adds "@2024" to the end. For example, if the user's name is "John Doe", 
  the generated password would be "JohDoe@2024".

*/


let firstName = "samuel"
let secondName = "WawerU"


// console.log(firstName.slice(0,3))
// console.log(firstName.slice(-3, firstName.length))

function passwordGenerator(firstName, lastName){
    firstName = firstName.trim().toLowerCase()
    secondName = secondName.trim().toLocaleLowerCase()
    let password = firstName.slice(0,3) + secondName.slice(-3, secondName.length) + "@2024"
    return console.log(password)
}

passwordGenerator(firstName, secondName)