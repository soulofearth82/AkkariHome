
//load data to page 
function loadData() {

    const data = [
        { "الرقم": "1", "المدينة": "دمشق", "التفاصيل": "شقة غرفتين و صالون مساحة 90 م", "الايجار": "1000000", "المنطقة": "القابون", "الملكية": "طابو", "الكراج": "لايوجد", "البلكون": "مساحة 12م", "الطابق": "3", "مفروشة": "نعم", "صورة": "Images/01.jpg", "صورة1": "Images/02.jpg", "صورة2": "Images/03.jpg", },

        { "الرقم": "2", "المدينة": "ريف دمشق", "التفاصيل": "شقة غرفة وصالة مساحة 70 م", "الايجار": "700000", "المنطقة": "ضاحية قدسيا", "الملكية": "حكم محكمة", "الكراج": "لايوجد", "البلكون": "مساحة 3م", "الطابق": "2", "مفروشة": "لا", "صورة": "Images/04.jfif", "صورة1": "Images/05.jfif", "صورة2": "Images/06.jfif", },

        { "الرقم": "3", "المدينة": "حمص", "التفاصيل": "محل 6 م", "الايجار": "600000", "المنطقة": "البردان", "الملكية": "حكم محكمة", "الكراج": "لايوجد", "البلكون": "لا يوجد", "الطابق": "ارضي", "مفروشة": "لا", "صورة": "Images/07.jfif", "صورة1": "Images/08.jfif", "صورة2": "Images/09.jfif", },

        { "الرقم": "4", "المدينة": "حلب", "التفاصيل": "فيلا سوبر 2 دونم", "الايجار": "9000000", "المنطقة": "جانب القلعة", "الملكية": "طابو", "الكراج": "يوجد", "البلكون": "5 بلكونات مساحة 15م", "الطابق": "1", "مفروشة": "لا", "صورة": "Images/04.jfif", "صورة1": "Images/04.jfif", "صورة2": "Images/04.jfif", },

        { "الرقم": "5", "المدينة": "دمشق", "التفاصيل": "شقة ارضية 2 غرفة و صالون مساحة 100م", "الايجار": "1500000", "المنطقة": "المزة", "الملكية": "طابو", "الكراج": "يوجد", "البلكون": " مساحة 4 م", "الطابق": "5", "مفروشة": "نعم", "صورة": "Images/04.jfif", "صورة1": "Images/04.jfif", "صورة2": "Images/04.jfif", },

        { "الرقم": "6", "المدينة": "اللاذقية", "التفاصيل": "شاليه غرفتين و صالون مساحة 70 م", "الايجار": "700000", "المنطقة": "الشاطئ الازرق", "الملكية": "طابو", "الكراج": "لايوجد", "البلكون": "مساحة 2م", "الطابق": "1", "مفروشة": "نعم", "صورة": "Images/04.jfif", "صورة1": "Images/04.jfif", "صورة2": "Images/04.jfif", },

        { "الرقم": "7", "المدينة": "ريف دمشق", "التفاصيل": "شقة غرفتين و صالون مشاحة 100 م", "الايجار": "550000", "المنطقة": "ضاحية قدسيا", "الملكية": "حكم محكمة", "الكراج": "لايوجد", "البلكون": "مساحة 3م", "الطابق": "1", "مفروشة": "لا", "صورة": "Images/04.jfif", "صورة1": "Images/04.jfif", "صورة2": "Images/04.jfif", },

        { "الرقم": "8", "المدينة": "طرطوس", "التفاصيل": "شاليه غرفتين و صالون مطلة على البحر", "الايجار": "800000", "المنطقة": "على البحر", "الملكية": "حكم محكمة", "الكراج": "يوجد", "البلكون": "مساحة 2م", "الطابق": "ارضي", "مفروشة": "نعم", "صورة": "Images/04.jfif", "صورة1": "Images/04.jfif", "صورة2": "Images/04.jfif", },

        { "الرقم": "9", "المدينة": "ريف دمشق", "التفاصيل": "شقة غرفتين و صالون مساحة 104 م", "الايجار": "1600000", "المنطقة": "صحنايا", "الملكية": "حكم محكمة", "الكراج": "لايوجد", "البلكون": "مساحة 3م", "الطابق": "3", "مفروشة": "نعم", "صورة": "Images/04.jfif", "صورة1": "Images/04.jfif", "صورة2": "Images/04.jfif", },

        { "الرقم": "10", "المدينة": "دمشق", "التفاصيل": "شقة 3 غرف و صالون مساحة 120م", "الايجار": "1900000", "المنطقة": "البرامكة", "الملكية": "طابو", "الكراج": "يوجد", "البلكون": "مساحة 3م", "الطابق": "2", "مفروشة": "نعم", "صورة": "Images/04.jfif", "صورة1": "Images/04.jfif", "صورة2": "Images/04.jfif", },];

    buildtable(data)
}

// buid the table dynamically
function buildtable(data) {
    var tableBody = document.getElementById('tableBody');
    for (var i = 0; i < data.length; i++) {
        var row = `<tr border="1">
                                        <td id="FlNo${data[i].الرقم}">${data[i].الرقم}</td>
                                        <td>${data[i].المدينة}</td>
                                        <td>${data[i].التفاصيل}</td>
                                        <td>${data[i].الايجار}</td>
                                        <td><input type="checkbox" id="flatCk${data[i].الرقم}"  onchange="showRow(${data[i].الرقم})"></td>
                                        <td><input type="radio" id="flatra${data[i].الرقم}" name="flatRa" value="${data[i].الرقم}""></td>
                                        
                                   </tr>

                                   <tr id="container${data[i].الرقم}" class="containerhide" style="background-color: ghostwhite" rowspan="2"">

                                        <td colspan="2">
                                           المنطقة: ${data[i].المنطقة}
                                            <br />
                                           الملكية: ${data[i].الملكية}
                                            <br />
                                            <img src=" ${data[i].صورة}" />
                                        </td>
                                        <td colspan="2">
                                              الكراج: ${data[i].الكراج}
                                             <br />
                                            البلكون: ${data[i].البلكون}
                                             <br />
                                             <img src=" ${data[i].صورة1}" />
                                        </td>
                                        <td colspan="2">
                                            مفروشة:  ${data[i].مفروشة}
                                             <br />
                                           الطابق:  ${data[i].الطابق}
                                             <br />
                                             <img src=" ${data[i].صورة}" />
                                        </td>

                                   </tr>`;

        tableBody.innerHTML += row

    }
}

//SHow the row of the data table
function showRow(rowNum) {
    var row = document.getElementById('container' + rowNum);
    if (row.classList.contains('containerhide')) {
        row.classList.remove('containerhide');
    } else {
        row.classList.add('containerhide');
    }
}

//show the form after choosing the radio button
function showForm() {
    const RBErrormsg = document.getElementById("RBError");
    RBErrormsg.textContent = "";
    var radios = document.getElementsByName("flatRa");
    var radioChecked = false;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioChecked = true;
            var frm = document.getElementById('RSform');
            if (frm.classList.contains('containerhide')) {
                frm.classList.remove('containerhide');
                copyData([i]);
            }
        }
    }

    if (!radioChecked) {
        RBErrormsg.textContent = "يرجى اختيار احد الشقق من الجدول .";
    }
}


    //take the flat no and assign it to the input in the registration form
    function copyData(aa) {
        var tableData = document.getElementById('FlNo' + aa).innerText;
        document.getElementById('flatidd').value = tableData;
    }

    /////////////////////////
    //Form validation
    function validateForm() {
        //Assign the variables
        const fname = document.forms["RSform"]["fullnamein"].value;
        const IDInput = document.getElementById('Idcard').value;
        const dateInput = document.getElementById('BirthDate').value;
        const mobile = document.forms["RSform"]["mobileno"].value;
        const mailid = document.forms["RSform"]["emailid"].value;
        //patterns:
        var arabicInput = /^[\u0600-\u06FF\s]+$/;
        let specialNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'];;
        var datePattern = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/;
        var mobilepattern = /^(09)\d{8}$/;
        var emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        let isValid = true;

        //validate Arabic input language
        const nameError = document.getElementById("name-error");
        nameError.textContent = "";
        if (!arabicInput.test(fname)) {
            nameError.textContent = "يرجى ادخال الاسم باللغة العربية .";
            isValid = false;
        }

        //validate ID Card input
        const IDCardError = document.getElementById("IDCard-error");
        IDCardError.textContent = "";
        let startsWithSpecial = specialNumbers.some(num => IDInput.startsWith(num));
        if (IDInput.length === 11 && startsWithSpecial) {
            isValid = true;
        }
        else {
            IDCardError.textContent = "يرجى ادخال رقم الهوية الي يبدأ باحد الارقام التالية من 01 الى 14 .";
            isValid = false;
        }
        //validate Birthdate input
        const BdateError = document.getElementById("BDate-error");
        BdateError.textContent = "";
        if (!datePattern.test(dateInput)) {
            BdateError.textContent = "يرجى ادخال التاريخ بصيغة dd-mm-yyyy .";
            isValid = false;
        }

        //validate mobile input
        const MobileError = document.getElementById("mobile-error");
        MobileError.textContent = "";
        if (!mobilepattern.test(mobile)) {
            MobileError.textContent = "يرجى ادخال رقم موبايل يبدأ بالرمز 09 .";
            isValid = false;
        }
        //validate email input
        const EmailError = document.getElementById("Email-error");
        EmailError.textContent = "";
        if (!emailpattern.test(mailid)) {
            EmailError.textContent = "عنوان البريد الإلكتروني غير صالح! ";
            isValid = false;
        }
        ///check if all inputs are validate succefully to generate the captcha
        if ((arabicInput.test(fname)) && (IDInput.length === 11 && startsWithSpecial) && (datePattern.test(dateInput)) && (mobilepattern.test(mobile)) && (emailpattern.test(mailid)) === true) {
            var frm = document.getElementById('captchahshow');
            if (frm.classList.contains('containerhide')) {
                frm.classList.remove('containerhide');
                generateCaptcha();
            }
        }
    }
    //validate the Captcha function
    function captcha() {

        let userInput = document.getElementById("userInput").value;
        let captcha = document.getElementById("captcha").innerHTML;
        if (userInput !== captcha) {
            isValid = false;
            alert("يرجى ادخال الرمز بشكل صحيح,يرجى المحاولة مرة أخرى.");
        }
        else {
            passdata();
        }

    }
    //generate captch function
    function generateCaptcha() {
        let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let length = 6;
        let captcha = "";
        for (let i = 0; i < length; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        document.getElementById("captcha").innerHTML = captcha;
    }
