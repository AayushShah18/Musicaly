let audioElement = new Audio('songs/1.mp3');
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let anime = document.getElementById("gif");
let songs = [
    {songName:"Disturbia", filePath:"songs/1.mp3", coverPath:"cover/disturbia.jpeg"},
    {songName:"Disturbia", filePath:"songs/1.mp3", coverPath:"cover/disturbia.jpeg"},
    {songName:"Disturbia", filePath:"songs/1.mp3", coverPath:"cover/disturbia.jpeg"},
    {songName:"Disturbia", filePath:"songs/1.mp3", coverPath:"cover/disturbia.jpeg"},
    {songName:"Disturbia", filePath:"songs/1.mp3", coverPath:"cover/disturbia.jpeg"},
    {songName:"Disturbia", filePath:"songs/1.mp3", coverPath:"cover/disturbia.jpeg"},

]

//play/pause

masterPlay.addEventListener('click',() =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        anime.style.opacity=1;
}
    else if(audioElement.currentTime>=0){
        audioElement.pause();
        anime.style.opacity=0;
    }
});


audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime = progressBar.value*audioElement.duration/100;
})

