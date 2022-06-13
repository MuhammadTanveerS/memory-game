const section = document.querySelector('section');
const livesCount = document.getElementById('livesCount');
const lives = 5;

livesCount.textContent = lives;

const getImages = () => [
    {poster: "./images/Alien.jpg", name:"Alien"},
    {poster: "./images/ApocalypseNow.jpg", name:"Apocalypse Now"},
    {poster: "./images/IndianaJones.jpg", name:"Indiana Jones"},
    {poster: "./images/PulpFiction.jpg", name:"Pulp Fiction"},
    {poster: "./images/TaxiDriver.jpg", name:"Taxi Driver"},
    {poster: "./images/Terminator.jpg", name:"Terminator"},
    {poster: "./images/TheShining.jpg", name:"The Shining"},
    {poster: "./images/TheThing.jpg", name:"The Thing"},
    {poster: "./images/Alien.jpg", name:"Alien"},
    {poster: "./images/ApocalypseNow.jpg", name:"Apocalypse Now"},
    {poster: "./images/IndianaJones.jpg", name:"Indiana Jones"},
    {poster: "./images/PulpFiction.jpg", name:"Pulp Fiction"},
    {poster: "./images/TaxiDriver.jpg", name:"Taxi Driver"},
    {poster: "./images/Terminator.jpg", name:"Terminator"},
    {poster: "./images/TheShining.jpg", name:"The Shining"},
    {poster: "./images/TheThing.jpg", name:"The Thing"}
];

const selectRandom = () => {
    const posterData = getImages();
    // console.log(posterData);
    posterData.sort(() => Math.random()-0.5);
    return posterData;
}

const posterGenerator = () => {
    const posters = selectRandom();

    posters.forEach((item) => {
        const poster = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");

        face.src = item.poster;
        poster.setAttribute("name",item.name);

        poster.classList = "poster";
        face.classList = "face";
        back.classList = "back"

        section.appendChild(poster);
        poster.appendChild(face);
        poster.appendChild(back);

        poster.addEventListener('click', (e)=>{
            poster.classList.toggle("togglePoster")
            checkPoster(e);
        })
    });

}

const checkPoster = (e) => {
    const clickedPoster = e.target;
    clickedPoster.classList.add("flipped")
    const flippedPosters = document.querySelectorAll('.flipped');
    
    if(flippedPosters.length === 2){
        if(flippedPosters[0].getAttribute('name')===flippedPosters[1].getAttribute('name')){
            console.log("match");
        }else{
            console.log("Wrong");
        }
    }
    
    console.log(clickedPoster);
}

posterGenerator();