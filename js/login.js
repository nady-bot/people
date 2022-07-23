import { generateObject, displayAlert, checkIfInputNotEmpty ,
    dispalayGridAndHidden , dispalayBlockAndHidden , 
    fetchResponseGet , fetchResponsePost  } from "./utils.js"

(function () {


    let divOne = document.querySelector(".login-register .one");
    let toSignin = document.querySelector(".login-register .toSignin");

    let divTwo = document.querySelector(".login-register .two");
    let toRegister = document.querySelector(".login-register .toRegister");


    let btnRegister = document.querySelector(".login-register .one button");
    let btnLogin = document.querySelector(".login-register  .two button ");

    let inputsRegister = document.querySelectorAll(".login-register .one input");

    toSignin.addEventListener("click", () => {

        divOne.style.display = "none";
        divTwo.style.display = "block";

    });

    toRegister.addEventListener("click", () => {

        divOne.style.display = "block";
        divTwo.style.display = "none";

    });

    btnRegister.addEventListener("click", () => {

        fetchResponseGet("https://forkify-api.herokuapp.com/api/search?q=pizza" , 
        (e)=>{ console.log(e) } , ()=>{ console.log("nady abbas") } )

    });

    btnLogin.addEventListener("click", () => {

        fetchResponseGet("https://forkify-api.herokuapp.com/api/search?q=pasta" , 
        (e)=>{ console.log(e) } , ()=>{ console.log("nady abbas") } )

    });


})();







