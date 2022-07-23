
import {bodyProductsButtons , opticalProductsButtons ,  
    audioProductsButtons , audio2ProductsButtons  } from "./main.js"


export function addToTable_electron(obj) {

    let tmp  = `
        
        <p> ${obj.name} </p>  
        <p> ${obj.email} </p>  
        <p> ${obj.phone} </p>  
        <p> ${obj.address} </p>  
        <p> ${obj.productName} </p>  
        <p> ${obj.productNum} </p>  
        <p> ${obj.productPrice} </p>  
        <p> ${obj.nameCardOwner} </p>  
        <p> ${obj.numCard} </p>  
    `;

    let div = document.createElement("div") ; 
    div.innerHTML  = tmp ; 
    document.querySelector(".dash-2 .table_2 .row").append(div)  ;

}

export function addToTable_home(obj) {

    let tmp = `
        <p> ${obj.name} </p>  
        <p> ${obj.email} </p>  
        <p> ${obj.phone} </p>  
        <p> ${obj.address} </p>  
        <p> ${obj.productName} </p>  
        <p> ${obj.productNum} </p> 
        <p> ${obj.productPrice} </p> 
        <p> ${obj.place} </p>  
    `;
   

    let div = document.createElement("div") ; 
    div.innerHTML  = tmp ; 
    document.querySelector(".dash-2 .table_1 .row").append(div)  ;

}

export function addProduct(obj) {

    let div = document.createElement("div") ; 
    let proud = `

            <img class="img-product" src= "upload/${obj.img}" >
            <div class="produt-info">
                <p> اسم المنتج : <span> ${obj.name} </span></p>
                <p> <span> ${obj.number} </span> : رقم المنتج </p>
                <p> <span> ${obj.price} </span> : سعرالمنتج </p>
            </div>
            <button> <img src="images/المنتجات/شراء المنتج.png"> </button>

        ` ;
    div.innerHTML = proud ; 

    switch (obj.select) {

        case "منتجات سمعية":
            document.querySelector(".audio-products .body .one").append(div);
            audioProductsButtons() ; 
            break;
        case "منتجات بصرية":
            document.querySelector(".optical-products .body .one").append(div);
            opticalProductsButtons() ; 
            break;
        case "منتجات صوتية":
            document.querySelector(".audio2-products .body .one").append(div);
            audio2ProductsButtons() ; 
            break;
        case "منتجات جسدية":
            document.querySelector(".body-products .body .one").append(div);
            bodyProductsButtons() ; 
            break;

    }

}


export function generateObject(position) {
    let obj = {};
    let inps = document.querySelectorAll(position);
    for (let i = 0; i < inps.length; i++) {
        obj[inps[i].id] = inps[i].value;
    }
    return obj;

}


export function displayAlert(className, message) {
    let tmp = document.createElement("div");
    tmp.className = className;
    document.body.append(tmp);
    tmp.innerHTML = message;
    setTimeout(() => {
        tmp.remove()
    }, 1000)
}


export function checkIfInputNotEmpty(position) {

    let inps = document.querySelectorAll(position);
    for (let i = 0; i < inps.length; i++) {
        if (inps[i].value.trim() == "") {
            return false;
        }
    }
    return true;
}

export function deleteInputContent(position) {

    let inps = document.querySelectorAll(position);
    for (let i = 0; i < inps.length; i++) {
        inps[i].value.trim()  = ""  ; 
  
    }
    
}


export function dispalayGridAndHidden(display, hidden) {
    hidden.style.display = "none";
    display.style.display = "grid";
}

export function dispalayBlockAndHidden(display, hidden) {
    hidden.style.display = "none";
    display.style.display = "block";
}


export async function fetchResponsePost(url, obj , true_callBack, false_callBack) {

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(obj)
    });

    if (response.ok) {
        let json = await response.json();
        true_callBack(json);
    } else {
        false_callBack();
    }

}

export async function fetchResponseGet(url, true_callBack, false_callBack) {

    let response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });

    if (response.ok) {
        let json = await response.json();
        true_callBack(json);
    } else {
        false_callBack();
    }

}


