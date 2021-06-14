//Conect Eyes Icon
const pass = document.querySelector("#pass");

//Conect Password Input Box
const psw = document.querySelector("#psw");

//Eyes Icon click Function
pass.addEventListener("click",function(){

   //If Input Type Password
  if (psw.type == "password") {
    psw.type = "text";
    pass.classList.add("fa-eye-slash");
    pass.classList.remove("fa-eye");
    psw.placeholder = "12345678";
  }
  
  //If Input Type Anything
  else{
    psw.type = "password";
    pass.classList.add("fa-eye");
    pass.classList.remove("fa-eye-slash");
    psw.placeholder = "********";
  }
})
