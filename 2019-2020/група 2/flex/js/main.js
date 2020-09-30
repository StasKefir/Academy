
// function ClickOnBtn(event) {

//     alert("Ви нажали на кнопку");
//     alert(a);
// }
let btn = document.querySelector(".btn");

btn.addEventListener('click', function(event){
    event.preventDefault();
    console.log(event.target);
});