

export let arrayOfQuestions = [
 `هو موقع متخصص  في بيع الأجهزة التعوضية التي تساعد 
ذوي الاحتياجات الخاصة في حياتهم اليومية وتخطي جميع الصعوبات 
التي  توجههم بشكل يومي`   
, 
`هذه الشركة تقوم 
ببيع وشراء وإستبدال جميع الاجهزة التعويضية
التي تساعد فئة ذوي الحتياجات الخاصة لجميع الاعمار`
, 
`تقع شركة  people  داخل جمهورية مصر  العربية 
داخل إقليم او محافظة الدقهلية بمدينة المنصورة 
بجور كوبري السكة الحديد بتقسيم بهاء  `
, 
`لمعرفة المنتاجات الذي يوفرها الموقع 
الرجاء الذهاب الي قائمة المنتاجات `
, 
`يبداء العمل من الساعة العاشرة صباحا حتي الساعه العاشرة مسائا`
,
`نعم .. الاجهزة التعويضية تتناسب مع جميع الاعمار 
من سن 3 سنوات حتي سن 80 سنه `
, 
`الرجاء التواصل مع الاخصائي المتواجد داخل الشركة من خلال
قائمة للتواصل , لان جميع الاجهزة تختلف في الاستخدام
من جهاز  الي  اخر .`
, 
`يتراوح عمر الجهاز او المنتج علي حسب نوعه
ولاكن بشكل نسبي يتروح هذا العمر الافتراضي  بين 
10 سنوات الي 20 سنة 
مع الحفاظ في الاستخدام والصيانه المستمرة`
]  ; 

let  productCategory = "" ; 

export function setProductCategory(s){
    productCategory = s ; 
}

export function getProductCategory(){
   return  productCategory   ; 
}



