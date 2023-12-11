let image = document.getElementById('image');

const url = "https://random.dog/woof.json"

setInterval(() => {
    axios.get(url)
    .then(res=> {
        console.log(res.data);
        image.src = res.data.url
    })
}, 4000);