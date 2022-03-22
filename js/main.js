
import {arrayOfQuestions , getProductCategory  , setProductCategory } from "./data.js"



let flagProduct = "audioProducts" ; 


let home = document.querySelector(".home  ");
let toProduct = document.querySelector(".home .one p");
let toAbout = document.querySelector(".home .three p");
let toContact = document.querySelector(".home .four p");


let contact = document.querySelector(".contact ");
let arrowContact = document.querySelector(".contact .header img ");


let products = document.querySelector(".products  ");
let arrowProduct = document.querySelector(".products .header img");
let toBodyProducts = document.querySelectorAll(".products .body .one img  ")[0];
let toOpticalProducts = document.querySelectorAll(".products .body .one img  ")[1];
let toAudio2Products = document.querySelectorAll(".products .body .two img  ")[0];
let toAudioProducts = document.querySelectorAll(".products .body .two img  ")[1];


let audioProducts = document.querySelector(".audio-products  ");
let audioProductsButton = document.querySelectorAll(".audio-products button ");
let arrowAudioProducts = document.querySelector(".audio-products .header img");

let audio2Products = document.querySelector(".audio2-products  ");
let audio2ProductsButton = document.querySelectorAll(".audio2-products button ");
let arrowAudio2Products = document.querySelector(".audio2-products .header img");

let bodyProducts = document.querySelector(".body-products  ");
let bodyProductsButton = document.querySelectorAll(".body-products button ");
let arrowBodyProducts = document.querySelector(".body-products .header img");

let opticalProducts = document.querySelector(".optical-products  ");
let opticalProductsButton = document.querySelectorAll(".optical-products button ");
let arrowOpticalProducts = document.querySelector(".optical-products .header img");


let about = document.querySelector(".about  ");
let arrowAbout = document.querySelector(".about .header img");
let q_About = document.querySelectorAll(".about .body .one  p");


let questions = document.querySelector(".questions  ");
let arrowQuestions = document.querySelector(".questions .header img");
let p_Questions = document.querySelector(".questions .body .bg-transparent p");
let p_Answer = document.querySelector(".questions .body .bg-transparent div p");

let register = document.querySelector(".register  ");
let registerInput = document.querySelectorAll(".register .one .left input ");
let toPaying = document.querySelector(".register .two .to-paying  ");
let arrowRegister = document.querySelector(".register .header img");


let paying = document.querySelector(".paying  ");
let toPayingElectron = document.querySelector(".paying .sec-one  ");
let toReceipt = document.querySelector(".paying .sec-two  ");
let arrowPaying = document.querySelector(".paying .header img");

let receipt = document.querySelector(".receipt  ");
let toConfirmed_1 = document.querySelector(".receipt .sec-one  ");
let toConfirmed_2 = document.querySelector(".receipt .sec-two  ");
let arrowReceipt = document.querySelector(".receipt .header img");

let confirmed = document.querySelector(".confirmed  ");
let arrowConfirmed = document.querySelector(".confirmed .header img");

let payingElectron = document.querySelector(".payingElectron  ");
let toConfirmedElectron = document.querySelector(".payingElectron .two .to-confirmedElectron  ");
let arrowPayingElectron = document.querySelector(".payingElectron .header img");

let confirmedElectron = document.querySelector(".confirmedElectron  ");
let arrowConfirmedElectron = document.querySelector(".confirmedElectron .header img");




function dispalayGridAndHidden(display, hidden) {
    hidden.style.display = "none";
    display.style.display = "grid";
}

function dispalayBlockAndHidden(display, hidden) {
    hidden.style.display = "none";
    display.style.display = "block";
}

function setDataOfProduct(obj ){

    registerInput[0].value = obj.children[1].children[0].innerHTML  ; 
    registerInput[1].value = obj.children[2].children[0].innerHTML  ; 
    registerInput[2].value = obj.children[3].children[0].innerHTML  ; 
    registerInput[3].value = getProductCategory() ;
}


toAbout.addEventListener("click", () => { dispalayGridAndHidden(about, home) });
toProduct.addEventListener("click", () => { dispalayGridAndHidden(products, home) });
toContact.addEventListener("click", () => { dispalayGridAndHidden(contact, home) });

toBodyProducts.addEventListener("click", () => { setProductCategory("إعاقة جسدية")  ;  dispalayGridAndHidden(bodyProducts, products) });
toOpticalProducts.addEventListener("click", () => {  setProductCategory( "إعاقة بصرية")   ; dispalayGridAndHidden(opticalProducts, products) });
toAudio2Products.addEventListener("click", () => {  setProductCategory( "إعاقة صوتية")  ;  dispalayGridAndHidden(audio2Products, products) });
toAudioProducts.addEventListener("click", () => {   setProductCategory(  "إعاقة سمعية"  ); dispalayGridAndHidden(audioProducts, products) });


arrowBodyProducts.addEventListener("click", () => { dispalayGridAndHidden(products, bodyProducts) });
arrowOpticalProducts.addEventListener("click", () => { dispalayGridAndHidden(products, opticalProducts) });
arrowAudio2Products.addEventListener("click", () => { dispalayGridAndHidden(products, audio2Products) });
arrowAudioProducts.addEventListener("click", () => { dispalayGridAndHidden(products, audioProducts) });


arrowAbout.addEventListener("click", () => { dispalayBlockAndHidden(home, about) });
arrowProduct.addEventListener("click", () => { dispalayBlockAndHidden(home, products) });
arrowContact.addEventListener("click", () => { dispalayBlockAndHidden(home, contact) });


arrowQuestions.addEventListener("click", () => { dispalayGridAndHidden(about, questions) });

q_About.forEach((q, key) => {
    q.addEventListener("click", () => {
        dispalayGridAndHidden(questions, about);
        p_Questions.innerHTML = q.innerHTML;
        p_Answer.innerHTML = arrayOfQuestions[key] ; 
    });

}) ; 

bodyProductsButton.forEach((button ) => {
    button.addEventListener("click", () => {
        dispalayGridAndHidden(register, bodyProducts);
        setDataOfProduct(button.parentElement ) ; 
        flagProduct = "bodyProducts" ; 
    });

}) ; 

opticalProductsButton.forEach((button ) => {
    button.addEventListener("click", () => {
        dispalayGridAndHidden(register, opticalProducts);
        setDataOfProduct(button.parentElement ) ; 
        flagProduct = "opticalProducts" ; 
    });

}) ; 

audioProductsButton.forEach((button ) => {
    button.addEventListener("click", () => {
        dispalayGridAndHidden(register, audioProducts);
        setDataOfProduct(button.parentElement ) ; 
        flagProduct = "audioProducts" ; 
    });

}) ; 

audio2ProductsButton.forEach((button ) => {
    button.addEventListener("click", () => {
        dispalayGridAndHidden(register, audio2Products);
        setDataOfProduct(button.parentElement ) ; 
        flagProduct = "audio2Products" ; 
    });

}) ; 


arrowRegister.addEventListener("click", () => {
    
    switch(flagProduct){

        case "bodyProducts" : 
             dispalayGridAndHidden(bodyProducts, register)  ; 
             break ; 
        case "opticalProducts" : 
             dispalayGridAndHidden(opticalProducts, register)  ; 
             break ; 
        case "audioProducts" : 
             dispalayGridAndHidden(audioProducts, register)  ; 
             break ; 
        case "audio2Products" : 
             dispalayGridAndHidden(audio2Products, register)  ; 
             break ; 

    }
    

});


arrowPaying.addEventListener("click", () => { dispalayGridAndHidden(register , paying) });
toPaying.addEventListener("click", () => { dispalayGridAndHidden( paying , register) });

arrowPayingElectron.addEventListener("click", () => { dispalayGridAndHidden( paying , payingElectron) });
toPayingElectron.addEventListener("click", () => { dispalayGridAndHidden( payingElectron , paying) });


arrowReceipt.addEventListener("click", () => { dispalayGridAndHidden(  paying  , receipt ) });
toReceipt.addEventListener("click", () => { dispalayGridAndHidden( receipt ,  paying  ) });


arrowConfirmed.addEventListener("click", () => { dispalayGridAndHidden(   receipt , confirmed ) });
toConfirmed_1.addEventListener("click", () => { dispalayGridAndHidden( confirmed ,  receipt    ) });
toConfirmed_2.addEventListener("click", () => { dispalayGridAndHidden( confirmed ,  receipt    ) });


arrowConfirmedElectron.addEventListener("click", () => { dispalayGridAndHidden(   payingElectron , confirmedElectron ) });
toConfirmedElectron.addEventListener("click", () => { dispalayGridAndHidden( confirmedElectron ,  payingElectron    ) }); 



