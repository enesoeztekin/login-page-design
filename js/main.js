const password = document.querySelector('#password')
const icon = document.querySelector('#show-password')

icon.addEventListener("click", ()=>{
    if(icon.className === "fa fa-eye"){
        icon.className = "fa fa-eye-slash"
        icon.style.right = "14px" //To stabilize position of the "show password" icon.
        password.type = "text";
    }else{
        icon.className = "fa fa-eye"
        icon.style.right = "15px" //To stabilize position of the "show password" icon.
        password.type = "password";
    }
})