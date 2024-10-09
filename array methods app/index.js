let outputMsg = document.querySelector(".card__content");
let push_btn = document.getElementById("push-btn");
let input = document.querySelector(".input");
let unshift = document.getElementById("unShift");
let shiftEl = document.getElementById("shift-btn");
let popEl = document.getElementById("pop-btn");

let arr = [1, 2, 3];
outputMsg.innerHTML = arr;


push_btn.addEventListener("click", function(){
    const newValue = input.value;

    if(newValue !== '') {
        arr.push(Number(newValue))
        input.value = "";
        outputMsg.textContent= arr;
        
    }
   
});


unshift.addEventListener("click", () => {
    const newValue = input.value;

    if(newValue !== '') {
        arr.unshift(Number(newValue))
        input.value = "";
        outputMsg.textContent= arr;
        
    }
});

shiftEl.addEventListener("click", () => {
   

        arr.shift();
        input.value = "";
        outputMsg.textContent= arr;
    
   
    
});

popEl.addEventListener("click", () => {
    arr.pop();
        input.value = "";
        outputMsg.textContent= arr;
})

