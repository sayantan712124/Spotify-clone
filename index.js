console.log("Welcome to Spotify music");
//Initialize the variables
let songIndex= 0;
let audioElement= new Audio('song/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgresssBar= document.getElementById('myProgresssBar');


let songs=[
    {songName :"Until  I Found You", filePath:"song/1.mp3"},
    {songName :"Until  I Found You", filePath:"song/1.mp3"},
    {songName :"Until  I Found You", filePath:"song/1.mp3"}
]
//Handle play or pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
       
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        

    }

})
//Listen to events
audioElement.addEventListener('timeUpdate', ()=>{
    console.log('timeUpdate');
    
})