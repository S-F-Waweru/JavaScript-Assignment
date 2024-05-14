/*
    1. Password Validation:
    
    Imagine a program where users create accounts. You want to make sure their passwords are strong and not easily guessed.
    This function checks if a password follows these guidelines:
    
    It cannot be blank (empty).
    It cannot contain repeated characters in a row (like "1111" or "aaaaa" or "Jjjj").
    Optionally, you can add a list of common words that users shouldn't use as passwords (like "password" or "123456").

*/

commonPassword = ["password" ,"1234567", "0000000" ]



 function passwordChecker (userpassword){
    // trim and change 
    let password = userpassword.toString()
    password = password.toLowerCase().trim()
    // check if password is empty
    if(password == null | password == ""){
        console.log("the password is null")
    }else{
        if (password.length <= 6){
            console.log("password too short")
        }else{
             // check repeated numbers
          for (let i = 0; i < password.length-3; i++) {
                if((password.charCodeAt(i) == password.charCodeAt(i + 1)) &&
                    (password.charCodeAt(i + 1) == password.charCodeAt(i + 2))){

                    return console.log("conatains repeating Characters")
                }
            }
            for(let pass of commonPassword){
                if (pass === password){
                    return console.log("This password is too common")
                }
            }

           return  console.log("Password is strong")
            
          }
        }
    }
    


 let testPassword = "testPassord"
 testPassword.toString()
 passwordChecker(testPassword)
