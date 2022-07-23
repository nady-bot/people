
import { arrayOfQuestions, getProductCategory, setProductCategory } from "./data.js"
import {
    generateObject, displayAlert, checkIfInputNotEmpty,
    dispalayGridAndHidden, dispalayBlockAndHidden,
    fetchResponseGet, fetchResponsePost, deleteInputContent , 
    addToTable_electron, addToTable_home, addProduct
} from "./utils.js"

import "./login.js"
import "./massage.js"
import "./admin.js"



let flagProduct = "audioProducts";
let userData = {};


fetchResponseGet("nn", (objData) => {

    if (objData.success == true) {
        objData.data.forEach((obj) => {
            addProduct(obj);
        });
    } else {
        displayAlert("alert_error", objData.error);
    }

}, () => {
    displayAlert("alert_error", "database not avilable ");
});

fetchResponseGet("nn", (objData) => {

    if (objData.success == true) {
        objData.data.forEach((obj) => {
            addToTable_home(obj);
        });
    } else {
        displayAlert("alert_error", objData.error);
    }
}, () => {
    displayAlert("alert_error", "database not avilable ");
});

fetchResponseGet("nn", (objData) => {

    if (objData.success == true) {
        objData.data.forEach((obj) => {
            addToTable_electron(obj);
        });
    } else {
        displayAlert("alert_error", objData.error);
    }

}, () => {
    displayAlert("alert_error", "database not avilable ");
})


export let home = document.querySelector(".home  ");
let toProduct = document.querySelector(".home .one img");
let toAbout = document.querySelector(".home .three img");
let toContact = document.querySelector(".home .four img");
let toLogin_register = document.querySelector(".home  .language .loginOrReg");


let login_register = document.querySelector(".login-register  ");
let arrowLogin = document.querySelector(".login-register .header img ");

let contact = document.querySelector(".contact ");
let arrowContact = document.querySelector(".contact .header img ");
let massage = document.querySelector(".contact .massage-container  ");
let massenger = document.querySelector(".contact .massenger");
let showMassenger = 0;


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
let toContactFromAbout = document.querySelector(".about .body .two .img-two ");


let questions = document.querySelector(".questions  ");
let arrowQuestions = document.querySelector(".questions .header img");


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


function setDataOfProduct(obj) {

    registerInput[0].value = obj.children[0].children[0].innerHTML;
    registerInput[1].value = obj.children[1].children[0].innerHTML;
    registerInput[2].value = obj.children[2].children[0].innerHTML;
    registerInput[3].value = getProductCategory();
}

export function bodyProductsButtons() {
    bodyProductsButton.forEach((button) => {
        button.addEventListener("click", () => {
            dispalayGridAndHidden(register, bodyProducts);
            setDataOfProduct(button.parentElement.children[1]);
            flagProduct = "bodyProducts";
        });

    });
}
export function opticalProductsButtons() {
    opticalProductsButton.forEach((button) => {
        button.addEventListener("click", () => {
            dispalayGridAndHidden(register, opticalProducts);
            setDataOfProduct(button.parentElement.children[1]);
            flagProduct = "opticalProducts";
        });
    
    });
}
export function audioProductsButtons() {
    audioProductsButton.forEach((button) => {
        button.addEventListener("click", () => {
            dispalayGridAndHidden(register, audioProducts);
            setDataOfProduct(button.parentElement.children[1]);
            flagProduct = "audioProducts";
        });
    
    });
}
export function audio2ProductsButtons() {
    audio2ProductsButton.forEach((button) => {
        button.addEventListener("click", () => {
            dispalayGridAndHidden(register, audio2Products);
            setDataOfProduct(button.parentElement.children[1]);
            flagProduct = "audio2Products";
        });
    
    });
}



bodyProductsButtons() ; 
opticalProductsButtons() ; 
audioProductsButtons() ; 
audio2ProductsButtons() ; 


toAbout.addEventListener("click", () => { dispalayGridAndHidden(about, home) });
toProduct.addEventListener("click", () => { dispalayGridAndHidden(products, home) });
toContact.addEventListener("click", () => { dispalayGridAndHidden(contact, home) });

toContactFromAbout.addEventListener("click", () => { dispalayGridAndHidden(contact, about) });
toLogin_register.addEventListener("click", () => {

    login_register.style.display = "flex";
    home.style.display = "none";

});

toBodyProducts.addEventListener("click", () => { userData = {}; setProductCategory("إعاقة جسدية"); dispalayGridAndHidden(bodyProducts, products) });
toOpticalProducts.addEventListener("click", () => { userData = {}; setProductCategory("إعاقة بصرية"); dispalayGridAndHidden(opticalProducts, products) });
toAudio2Products.addEventListener("click", () => { userData = {}; setProductCategory("إعاقة صوتية"); dispalayGridAndHidden(audio2Products, products) });
toAudioProducts.addEventListener("click", () => { userData = {}; setProductCategory("إعاقة سمعية"); dispalayGridAndHidden(audioProducts, products) });


arrowBodyProducts.addEventListener("click", () => { dispalayGridAndHidden(products, bodyProducts) });
arrowOpticalProducts.addEventListener("click", () => { dispalayGridAndHidden(products, opticalProducts) });
arrowAudio2Products.addEventListener("click", () => { dispalayGridAndHidden(products, audio2Products) });
arrowAudioProducts.addEventListener("click", () => { dispalayGridAndHidden(products, audioProducts) });


arrowAbout.addEventListener("click", () => { dispalayBlockAndHidden(home, about) });
arrowProduct.addEventListener("click", () => { dispalayBlockAndHidden(home, products) });
arrowContact.addEventListener("click", () => { dispalayBlockAndHidden(home, contact) });
arrowLogin.addEventListener("click", () => { dispalayBlockAndHidden(home, login_register) });


arrowQuestions.addEventListener("click", () => { dispalayGridAndHidden(about, questions) });

q_About.forEach((q, key) => {
    q.addEventListener("click", () => {
        dispalayGridAndHidden(questions, about);
        questions.style.backgroundImage = `url(${arrayOfQuestions[key]})`;
    });

});


arrowRegister.addEventListener("click", () => {

    switch (flagProduct) {

        case "bodyProducts":
            dispalayGridAndHidden(bodyProducts, register);
            break;
        case "opticalProducts":
            dispalayGridAndHidden(opticalProducts, register);
            break;
        case "audioProducts":
            dispalayGridAndHidden(audioProducts, register);
            break;
        case "audio2Products":
            dispalayGridAndHidden(audio2Products, register);
            break;

    }


});


arrowPaying.addEventListener("click", () => { dispalayGridAndHidden(register, paying) });
toPaying.addEventListener("click", () => {

    if (checkIfInputNotEmpty(".register .one  input")) {
        userData = {};
        dispalayGridAndHidden(paying, register);
        let tmp = generateObject(".register .one  input");
        userData.name = tmp.name;
        userData.email = tmp.email;
        userData.phone = tmp.phoneNum;
        userData.address = tmp.address;
        userData.productName = tmp.nameProduct;
        userData.productNum = tmp.productNum;
        userData.productPrice = tmp.productPrise;

    } else {
        displayAlert("alert_error", "emty inut not allow");
    }

});

arrowPayingElectron.addEventListener("click", () => { dispalayGridAndHidden(paying, payingElectron) });
toPayingElectron.addEventListener("click", () => { dispalayGridAndHidden(payingElectron, paying) });


arrowReceipt.addEventListener("click", () => { dispalayGridAndHidden(paying, receipt) });
toReceipt.addEventListener("click", () => { dispalayGridAndHidden(receipt, paying) });


arrowConfirmed.addEventListener("click", () => { dispalayGridAndHidden(products, confirmed) });
toConfirmed_1.addEventListener("click", () => {
    userData.place = "داخل المنزل";

    fetchResponsePost("nn", userData, (objData) => {

        if (objData.success == true) {
            addToTable_home(userData);
            dispalayGridAndHidden(confirmed, receipt);
            deleteInputContent(".register .one  input");
        } else {
            displayAlert("alert_error", objData.error);
        }

    }, () => {
        displayAlert("alert_error", "database not avilable ");
    });

});

toConfirmed_2.addEventListener("click", () => {
    userData.place = "داخل الشركة";
    fetchResponsePost("nn", userData, (objData) => {

        if (objData.success == true) {
            addToTable_home(userData);
            dispalayGridAndHidden(confirmed, receipt);
            deleteInputContent(".register .one  input");
        } else {
            displayAlert("alert_error", objData.error);
        }


    }, () => {
        displayAlert("alert_error", "database not avilable ");
    });

});


arrowConfirmedElectron.addEventListener("click", () => { dispalayGridAndHidden(products, confirmedElectron) });
toConfirmedElectron.addEventListener("click", () => {

    if (checkIfInputNotEmpty(".payingElectron .body  input")) {
        let tmp = generateObject(".payingElectron .body  input");
        userData.nameCardOwner = tmp.name;
        userData.numCard = tmp.cardNum;
        fetchResponsePost("nn", userData, (objData) => {

            if (objData.success == true) {
                addToTable_electron(userData);
                dispalayGridAndHidden(confirmedElectron, payingElectron);
                deleteInputContent(".payingElectron .body  input") ; 
                deleteInputContent(".register .one  input");
            } else {
                displayAlert("alert_error", objData.error);
            }

        }, () => {
            displayAlert("alert_error", "database not avilable ");
        });


    } else {
        displayAlert("alert_error", "emty inut not allow");
    }
});


massage.addEventListener("click", () => {

    if (showMassenger == 0) {
        massenger.style.display = "flex";
        showMassenger = 1;
    }
    else {
        massenger.style.display = "none";
        showMassenger = 0;
    }


});


