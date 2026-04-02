const image = document.getElementById("image");
const btnRefresh = document.getElementById("btn-refresh");


function fetchDog(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
        image.src = data.message;
    });
}

fetchDog()

btnRefresh.addEventListener("click", ()=>{
    fetchDog();
})

//data 