const form = document.querySelector("form")
const input = document.querySelector(".input")
const bottomDiv = document.querySelector(".bottom")


function getWeather(curCity) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`)
    .then(res => res.json())
    .then(data => {
        bottomDiv.innerHTML = `
        <div>
            <p>${data.location.name}, ${data.location.country}</p>
            <img src="${data.current.condition.icon}" alt="">
            <p>${data.current.condition.text}</p>
            <p>Selsie: ${data.current.temp_c}</p>
            <p>Farangeith: ${data.current.temp_fw}</p>
        </div>
        `
    })
}

getWeather("Ganja");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    getWeather(input.value);
})






