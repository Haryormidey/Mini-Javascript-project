// object to store details
let userDetailsDatabase ={}


function getUserDetails() {
    //username 
    let username = prompt("Enter your username")

    if(username == null){
        return
    }

    function validateUsername(username){
        if(username.length < 10 && username.length > 0){
            return  true
        }else {
            return false
        }
    }

    while (validateUsername(username) == false){
        username = prompt("Username must be less than 10 and greater than 0")
    }

    userDetailsDatabase["Username"] = username


    // email adresss
    let email = prompt("Enter your email address")

    if(email == null){
        return
    }

    function vaidateEmail(email){
        const emailCheck = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        emailCheckResult = emailCheck.test(email)
        if(emailCheckResult == true){
            return true
        }else {
            return false
        }
    }

    while(vaidateEmail(email) === false){
        email = prompt("Enter a valid Email")
    }

    userDetailsDatabase["Email"] = email
    
    // phone number

    let phoneNumber = prompt("Enter your phone number")

    if(phoneNumber == null){
        return
    }

    function validatePhoneNumber(phoneNumber){
        if(phoneNumber.length == 11){
            return true
        }else {
            return false
        }
    }

    while(validatePhoneNumber(phoneNumber) === false){
        phoneNumber = prompt("Phone number must be 11 digits, try again!")
    }

    userDetailsDatabase["PhoneNumber"] = phoneNumber


    // password
    let password =  prompt("Enter your password")
    if(password == null){
        return
    }

    function validatePassword(password){
        if(password.length < 6){
            return false
        }else{
            return true
        }
    }

    while(validatePassword(password) === false){
        password = prompt("Password must not be less than 6 digits")
    }

    userDetailsDatabase["Password"] = password

    // confirm password
    let confirmPassword = prompt("Confirm your password")
    if(confirmPassword == null){
        return
    }

    function validateConfirmPassword(confirmPassword){
        if (confirmPassword !== password){
            return false
        }else {
            return true
        }
    }

    while(validateConfirmPassword(confirmPassword) === false){
        confirmPassword = prompt("Confirm password doesn't match password, try again!")
    }

    userDetailsDatabase["Confirm Password"] = confirmPassword

    console.log(userDetailsDatabase)
}

function displayUserDetails() {
    alert(`Your Details\n\n username: ${userDetailsDatabase.Username}\n Phone Number: ${userDetailsDatabase.PhoneNumber}\n Email: ${userDetailsDatabase.Email}\n `)
}















