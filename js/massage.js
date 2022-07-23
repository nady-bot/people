

(function () {

    let inputSend = document.querySelector(".contact .massenger .div-send input ");
    let buttonSend = document.querySelector(".contact .massenger .div-send button ");
    let containerMassage = document.querySelector(".contact .massenger .put-massage  ");


    let massage_1 = [
        `السلام عليكم`,
        `كيف الحال`,
        `كم عمرك`,
        `ما هي  اسعار المنتاجات`,
        `اود معرفة معلومات اكثر عن الموقع`,
        `هل من رقم او بريد الكتروني لتواصل مع شخص مسؤول`,
        `اواجة مشكلة كيف يمكني حلها`,
        `من هم الاشخاص القائمين  علي الموقع وايضا المصميمين`,
        `هل الموقع يتيح منتاجات اخر غير المنتاجات التعويضية`,
        `هل انت انثي`
    ]

    let massage_2 = [
        `وعليكم السلام ... كيف يمكني  مساعدتك`, 
        `انا بخير ... كيف  يمكني مساعدتك`, 
        `انا لا اعرف ؟ ... لاكن ما اعرفة انني تم تصميمي في تاريخ 1 مايو سنه 2022 م `, 
        `يمكنك زيارة قائمة المنتاجات لمعرفة اسعار المنتاجات وكل شئ عنها`, 
        `يمكنك زيارة قائمة حول لمعرفة جميع المعلومات عن الموقع `, 
        `نعم .. يوجد داخل قائمة للتواصل الذي انت متواجد فيها عليا .. كل ما عليك الضغط علي علامه الواتس اب او البريد الالكتروني المتواجدان علي يمين النافذة `, 
        `يمكن التواجة مباشرة الي مقر الشركة او التواصل علي رقم الموبايل او الواتس اب المتواجدين علي يمين النافذة `, 
        `هم مجموعة طلاب من ضم طلبة معهد الدلتا للحاسبات ونظم المعلومات ... وكان هذا الموقع عبارة عن مشروع تخرج لهما `, 
        `لا .. لاسف هذا الموقع متخصص في بيع الاجهزة التعويضية فقط ولا يتيح الموقع اي منتاجات تخص فئة اخر  `, 
        `انا ليس بشري لكي يقال عني اذا كنت انثي او ذكر  `
    ]

    function createMassage(massage, diraction) {

        let p = document.createElement("p");
        p.className = diraction;
        containerMassage.append(p);
        p.innerHTML = massage;
    }


    buttonSend.addEventListener("click", () => {

        if (inputSend.value.trim() != "") {

            console.log(inputSend.value.trim());
            console.log(massage_1.indexOf(inputSend.value.trim()));

            createMassage(inputSend.value.trim(), "right");
            if (massage_1.indexOf( inputSend.value.trim()) >= 0) {
                createMassage(massage_2[massage_1.indexOf( inputSend.value.trim())], "left");
            }
            else {
                createMassage("ليس لدي اجابة الرجاء التواصل مع الدعم", "left");
            }


        }
        inputSend.value = "";
        inputSend.focus();
        containerMassage.scrollTo(0, 5000000);


    })


})(); 