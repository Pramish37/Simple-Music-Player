console.log("Welcome to Myplayer")

let songIndex = 0;
let audioElement = new Audio('songs/12.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressbar');
let gifbar = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "All_of_Me.mp3", filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Berlin-Take_My_Breath.mp3", filePath: "songs/2.mp3", coverPath: "cover/2.jpg" },
    { songName: "Don't_Let_Me_Down.mp3", filePath: "songs/3.mp3", coverPath: "cover/3.jpg" },
    { songName: "Follow_The_Sun.mp3", filePath: "songs/4.mp3", coverPath: "cover/4.jpg" },
    { songName: "From_This_Moment_On_.mp3", filePath: "songs/5.mp3", coverPath: "cover/5.jpg" },
    { songName: "he_Will_Be_Loved.mp3", filePath: "songs/6.mp3", coverPath: "cover/6.jpg" },
    { songName: "Kina_-_Get_You_The_).mp3", filePath: "songs/7.mp3", coverPath: "cover/7.jpg" },
    { songName: "Let_Me_Love_You_ft._).mp3", filePath: "songs/8.mp3", coverPath: "cover/8.jpg" },
    { songName: "Love someoen - Copy.mp3", filePath: "songs/9.mp3", coverPath: "cover/9.jpg" },
    { songName: "Somebody_Loves_You.mp3", filePath: "songs/10.mp3", coverPath: "cover/10.jpg" },
    { songName: "From_This_Moment_On_.mp3", filePath: "songs/11.mp3", coverPath: "cover/11.jpg" },
    { songName: "Stay A Little Longer.mp3", filePath: "songs/12", coverPath: "cover/12.jpg" },
]

songItems.forEach((element, i)=> {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    
});

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gifbar.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gifbar.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})


myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {

    element.classList.remove('fa-pause-circle');

    element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();

        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if(songIndex=11){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('previous').addEventListener('click', () => {
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})