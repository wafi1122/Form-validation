const form = document.getElementById('form')
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//add event

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})
//more email validate
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexof("@");
    if(atSymbol < 1) return false;
    var dot = eamilVar.lastIndexof('.');
    if(dot <= atSymbol + 2 ) return false;
    if (dot === )
}

//define the validate function
const validate = () => {
    const usernameVal =  username.value.trim();
    const emailVal =  email.value.trim();
    const phoneVal =  phone.value.trim();
    const passwordVal =  password.value.trim();
    const cpasswordVal =  cpassword.value.trim();

    //validate username
    if(usernameVal === ""){
        setErrormsg(username,"username cannot be blank")
    }else if(usernameVal.length <= 2){
        setErrormsg(username,"username min 3 characters")

    }else{
        setSuccessMsg(username);
    }

    //validate email
    if(emailVal === ""){
        setErrormsg(email,"email cannot be blank")
    }else if(!isEmail(emailVal)){
        setErrormsg(emailVal,"Not a valid email")

    }else{
        setSuccessMsg(email);
    }
}
