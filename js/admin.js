
import {
    generateObject, displayAlert, checkIfInputNotEmpty,
    dispalayGridAndHidden, dispalayBlockAndHidden,
    fetchResponseGet, fetchResponsePost, addProduct
} from "./utils.js"
import { home } from "./main.js"

(function () {

    let toAdmin = document.querySelector(".home .language .admin ");
    let adminForm = document.querySelector(".home .admin-form  ");
    let toHome = document.querySelector(".home    .admin-form span ");
    let inputAdminForm = document.querySelector(".home    .admin-form input ");
    let btnAdminForm = document.querySelector(".home  .admin-form button ");



    let dashBoard = document.querySelector(".dashboard ");

    let dashBoard_dash_1 = document.querySelector(".dashboard .dash-1 ");
    let to_dash_3 = document.querySelector(".dashboard .dash-1 .body .img-one ");
    let to_dash_2 = document.querySelector(".dashboard .dash-1 .body .img-three  ");
    let arrowDashBoard_dash_1 = document.querySelector(".dashboard .dash-1 .arrow ");

    let dashBoard_dash_2 = document.querySelector(".dashboard .dash-2 ");
    let arrowDashBoard_dash_2 = document.querySelector(".dashboard .dash-2 .arrow ");


    let dashBoard_dash_3_form = document.querySelector(".dashboard .dash-3 form ");
    let dashBoard_dash_3 = document.querySelector(".dashboard .dash-3 ");
    let btnDash_3 = document.querySelector(".dashboard .dash-3 button ");
    let inputsDash_3 = document.querySelectorAll(".dashboard .dash-3 input ");
    let selectDash_3 = document.querySelector(".dashboard .dash-3 select ");
    let arrowDashBoard_dash_3 = document.querySelector(".dashboard .dash-3 .arrow ");



    dashBoard_dash_3_form.addEventListener('submit', async (event) => {

        event.preventDefault();
        let obj = new FormData();


        obj.append("name", inputsDash_3[0].value);
        obj.append("number", inputsDash_3[1].value);
        obj.append("price", inputsDash_3[2].value);
        obj.append("image", inputsDash_3[3].value);
        obj.append("select", selectDash_3.value.trim());

        console.log(obj) ; 
 

        if (checkIfInputNotEmpty(".dashboard .dash-3 input ")) {

            let objData = await fetch('http://localhost/_15/insert.php', {
                method: 'POST',
                body: obj,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Content-Type": "multipart/form-data",
                },
            })


            objData = await objData.json()

            console.log(objData);

            if (objData.success == true) {
                addProduct(obj);
                displayAlert("alert_acssept", "sccece");
            } else {
                displayAlert("alert_error", objData.error);
            }


        } else {
            displayAlert("alert_error", "empty not avilable ");
        }



    });


    toAdmin.addEventListener("click", () => {
        adminForm.style.display = "flex";
    });

    toHome.addEventListener("click", () => {
        adminForm.style.display = "none";
    });

    btnAdminForm.addEventListener("click", () => {

        // let obj = {
        //     pass : inputAdminForm.value.trim() 
        // }

        // fetchResponsePost("nn", obj, (objData) => {

        //     if (objData.success == true) {
        inputAdminForm.value = "";
        dispalayGridAndHidden(dashBoard, home);
        adminForm.style.display = "none";
        displayAlert("alert_acssept", "sccece");

        //     } else {
        //         displayAlert("alert_error", objData.error);
        //     }

        // }, () => {
        //     displayAlert("alert_error", "database not avilable ");
        // });


    });

    to_dash_2.addEventListener("click", () => {
        dispalayGridAndHidden(dashBoard_dash_2, dashBoard_dash_1);
    });

    to_dash_3.addEventListener("click", () => {
        dispalayGridAndHidden(dashBoard_dash_3, dashBoard_dash_1);
    });




    arrowDashBoard_dash_2.addEventListener("click", () => {
        dispalayGridAndHidden(dashBoard_dash_1, dashBoard_dash_2);
    });

    arrowDashBoard_dash_3.addEventListener("click", () => {
        dispalayGridAndHidden(dashBoard_dash_1, dashBoard_dash_3);
    });

    arrowDashBoard_dash_1.addEventListener("click", () => {
        dispalayBlockAndHidden(home, dashBoard);
    });

}
)();






