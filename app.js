const section = document.querySelector('section');
const livesCount = document.getElementById('livesCount');
let lives = 5;

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

    const togglePoster = document.querySelectorAll('.togglePoster');
    
    if(flippedPosters.length === 2){
        if(flippedPosters[0].getAttribute('name')===flippedPosters[1].getAttribute('name')){
            console.log("match");
            flippedPosters.forEach(poster =>{
                poster.classList.remove('flipped');
                poster.style.pointerEvents = 'none';
            })

        }else{
            console.log("Wrong");
            flippedPosters.forEach(poster =>{
                poster.classList.remove('flipped');
                setTimeout(() => poster.classList.remove('togglePoster'), 1000);
            });
            lives--;
            livesCount.textContent = lives;
            if(lives === 0){
                restartGame("Try Again!");
            }
        }
    }
    
    if(togglePoster.length === 16){
        restartGame("You Won! ^_^")
    }
}

const restartGame = (text) => {
    let posterData = selectRandom();
    let faces = document.querySelectorAll(".face");
    let posters = document.querySelectorAll(".poster");

    section.style.pointerEvents = 'none';

    posterData.forEach((item,index) => {
        posters[index].classList.remove('togglePoster');
        setTimeout(() => {
            posters[index].style.pointerEvents = "all";
            faces[index].src = item.poster;
            faces[index].setAttribute("name",item.name);
            section.style.pointerEvents = 'none';
        },1000)
    });
    lives = 5;
    livesCount.textContent = lives;
    setTimeout(() => window.alert(text),1000);
}

posterGenerator();