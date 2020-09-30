// 1
// let sbm = document.querySelector(".sbm");

// sbm.addEventListener('click', function(event){
//     event.preventDefault();
//     alert("ти натиснув на кнопку");
// });
// 2
// let toogle = document.querySelector(".toogle"),
//     shavuha = document.querySelector(".shavuha");

//     toogle.addEventListener('click', function(){
//             if(shavuha.classList.contains('hide')){
//                 shavuha.classList.remove("hide");
//             }else {
//                 shavuha.classList.add('hide');
//             }
//         });
// 3
// let inputPhone = document.querySelector(".phone");
//     inputPhone.addEventListener('input', function(){
//         console.log(inputPhone.value);
//     });
// 4
// let inputPhone = document.querySelector(".phone");
//     inputPhone.addEventListener('change', function(){
//         console.log(inputPhone.value);
//     });
// 5
// window.addEventListener('DOMContentLoaded', function(){
//     console.log("сторінка завантажена");
// });
// 6
// let inputPhone = document.querySelector(".phone"),
//     inputName = document.querySelector(".name"),
//     sbm = document.querySelector(".sbm"),
//     obj = {};

// window.addEventListener('DOMContentLoaded', function(){
//         loadFunc();
//     });
//   function  loadFunc(){
//     sbm.addEventListener('click', function(event){
//         event.preventDefault();
//         obj.name = inputName.value;
//         obj.phone = inputPhone.value;
//         console.log(obj);
//     });
//   }  
// 7
// let imgHover = document.querySelector(".shavuha");
//     imgHover.addEventListener("mouseover", func);
//     function func(){
//         alert(imgHover.src);
//     }
// 8
// let  sbm = document.querySelector(".sbm"),
//     inputName = document.querySelector(".name");

//     sbm.addEventListener("click", function(e){
//         e.preventDefault();
//         if(inputName.nodeValue==="Сергій") {
//             alert("Вітаю, ви перемогли!");
//         } else {
//             inputName.value="";
//         }
//     });