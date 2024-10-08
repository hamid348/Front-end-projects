let btn = document.getElementById("btn");
let joke = document.querySelector(".joke-text");
let url = "https://v2.jokeapi.dev/joke/Programming"


// function to generate new joke

let getJoke = () => {
    joke.classList.remove("fade")
    fetch(url)
    .then(data => data.json())
    .then(item => joke.textContent = `${item.joke}`);
    joke.classList.add("fade");

}

btn.addEventListener("click", getJoke)
getJoke();