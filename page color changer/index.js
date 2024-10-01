let color1 = document.getElementById("color-input");

let block1 = document.getElementById("container1");

color1.addEventListener("input", function() {
    
    let color = color1.value;
    block1.style.backgroundColor = color;
    color1.style.color=color;
});
