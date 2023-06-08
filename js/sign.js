const submit=document.getElementById("submit")
const userName=document.getElementById("Username")
const enterEmail=document.getElementById("email")
const enterPassword=document.getElementById("password")
const phoneNumber=document.getElementById("number")
submit.addEventListener('click',function(e){
    e.preventDefault()
    if(userName.value===""){
        alert("Enter user name")
    }
    else if(enterEmail.value===""){
        alert("Enter your Email")
    }
    else if(enterPassword.value===""){
        alert("Enter your password")
    }
    else if(phoneNumber.value===""){
        alert("Enter your phone number")
    }
    else{
        const userData={
            userName:userName.value,
            enterEmail:enterEmail.value,
            phoneNumber:phoneNumber.value,
            enterPassword:enterPassword.value,
        }
        let userDetails=[]
        userDetails.push(userData)
        localStorage.setItem('user',JSON.stringify(userDetails));
    
  

    }
})