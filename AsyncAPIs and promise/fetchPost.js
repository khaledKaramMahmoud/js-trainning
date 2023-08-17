const mail=document.getElementById('mail')
const password=document.getElementById('pass')
const loginBtn=document.getElementById('loginBtn')

async function login(){
    const loginData={
        "email":mail.value,
        "password":password.value
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(loginData)
    })

    const finalResponse = await response.json()
    console.log(finalResponse)
    //say response send success if user true
    //take him to home page
    // if(finalResponse!='success'){
    //     //show alert or error message
    // }else{
    //     window.location.href='home.html'
    // }
}

loginBtn.addEventListener("click", login)