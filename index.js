let btn=document.querySelector("#signup");
let popup=document.querySelector(".popup-block");
btn.onclick=()=>{
    popup.style.display="flex";
}
let spanCount=document.querySelector("#count");
let name=document.querySelector("#name");
name.onkeyup=function(){
    
    spanCount.innerHTML=name.value.length;
    if (name.value.length>=50) {
        spanCount.innerHTML=50;
    }
}
let inputChange=document.querySelector('#phone');
let label=document.querySelector("#ph");
let change=document.querySelector("#change");
let isEmail=true;
change.onclick=function(){
    
    if (isEmail) {
        inputChange.setAttribute("type","email");
        change.innerHTML='Use phone instead';
        label.innerHTML="Email"
        isEmail=false;
    } else {
        inputChange.setAttribute("type","tel");
        change.innerHTML='Use email instead';
        label.innerHTML="Phone";
        isEmail=true;
    }
}

var yearSelect=document.querySelector("#year");
var monthSelect=document.querySelector("#month");
var daySelect=document.querySelector("#day");
var months=['January','February','March','April','May','June','July','August','September','October','November','December'];

for (let year = 1901; year <= new Date().getFullYear(); year++) {
    var option = document.createElement('option');
    option.setAttribute('value', year);
    option.innerText = year;
    yearSelect.append(option);
}
for (let month = 0; month < 12; month++) {
    var option = document.createElement('option');
    option.setAttribute('value', month);
    option.innerText = months[month];
    monthSelect.append(option);
}
yearSelect.addEventListener('change', function(e){
    e.preventDefault();
    fillDaysMonth(yearSelect.value, monthSelect.value);
});
monthSelect.addEventListener('change', function (e) {
    e.preventDefault();
    fillDaysMonth(yearSelect.value, monthSelect.value);
});
function fillDaysMonth(year, month) {
    var d = new Date();
    d.setFullYear(year);
    d.setMonth(parseInt(month) + 1, 0);
    var lastDay = d.getDate();
    daySelect.innerText = '';
    for(let day = 1; day <= lastDay; day++) {
        var option = document.createElement('option');
        option.setAttribute('value', day);
        option.innerText = day;
        daySelect.append(option);
    }
}
fillDaysMonth(yearSelect.value, monthSelect.value);



// function validatorForm(element){
//     var name=$("#name").val(),
//         email=$("#phone").val();
//     $(".error-input").removeClass("error-input");
//     if (element.id==='name') {
//         if (!name.trim()) {
//             // var mainDiv=$("#name").parent();
//             // mainDiv.addClass('error-input');
//             $("#name").addClass('error-input');
//             // var span=$(".name").find('span');
//             // span.html("What's your name?");
//             var label=$(".name>label");
//             label.css({
//                 color:'#E0245E'
//             });
//         }
//     }
//     else if (element.id==='phone') {
//         if (!email.trim()) {
//             $("#phone").addClass('error-input');
//             var span=$(".phone-email").find('span');
//             // span.html("What's your phone?");
//             // span.css({
//             //     display:'block'
//             // });
//             var label=$(".phone-email>label");
//             label.css({
//                 color:'#E0245E'
//             });
//         }else if (email.indexOf('@')===-1) {
//             $("#phone").addClass('error-input');
//             var span=$(".phone-email").find('span');
//             // span.html("What's your phone?");
//             // span.css({
//             //     display:'block'
//             // });
//             var label=$(".phone-email>label");
//             label.css({
//                 color:'#E0245E'
//             });
//         }
//     }
    
// }

// $("#name,#phone").on('input',function(){
//     validatorForm(this);
// })




function formValidator() {
    var invalids=document.querySelectorAll(":invalid").length,
        button=document.querySelector("#next"); 
    console.log(invalids);
    if (invalids===0) {
        button.setAttribute("class","active");
    }else{
        button.removeAttribute("class");
    }
}

formValidator();

