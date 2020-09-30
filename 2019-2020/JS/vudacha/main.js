// let arr = [1,"a",3,"b",5];

// arr.forEach(function (item, i) {
//     console.log(i);
// });

let inputs = document.querySelectorAll(".foreach");



// console.log(inputs);

inputs.forEach((item,i) =>{
    item.addEventListener('click', function (event) {
        let target = event.target;
        if(item === target) {
            console.log(item);
        }
    });
});


