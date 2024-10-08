let exploreid = document.querySelector("#explore");
let picShow = document.querySelector(".pics");

const imgs = [
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "http://www.bootleg-objects.com/download/re_sl_totale.jpg",
    "http://blogs.ukoln.ac.uk/cultural-heritage/files/2010/03/NIM_1983-99_23.jpg",
    "http://www.freeimageslive.com/galleries/objects/watch/pics/objects00242.jpg",
    "http://www.imageafter.com/dbase/images/objects/b10objects019.jpg",
    "http://www.imageafter.com/dbase/images/objects/b12objects024.jpg",
    "http://www.imageafter.com/dbase/images/objects/b4objects023.jpg",
    "http://www.imageafter.com/dbase/images/objects/b19objects166.jpg",
    
]


exploreid.addEventListener("click", () =>{
   
    if(picShow.style.display === "none") {
        picShow.textContent = ""
        picShow.style.display = "grid"
    for(let i = 0; i<=imgs.length-1; i++) {
        picShow.innerHTML += `<img class="team-img" src="${imgs[i]}">`

    }
    }
    else {
        picShow.textContent =""
        picShow.style.display ="none"

    }

});



