const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const preBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//Song titles
const songs = ['Delhi', 'if the world was ending', 'kabira', 'What other people say']

//keep track of songs
let songIndex = 0;

//update song details
const loadSong = (song) => {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

//initially load song into DOM
loadSong(songs[songIndex])

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')

    audio.pause()
}

function prevSong(){
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length-1
    }

    loadSong(songs[songIndex])
    playSong()

}

function nextSong(){
    songIndex++

    if(songIndex > songs.length-1){
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
}

function updateProgress(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    console.log(clickX)
    const duration = audio.duration

    audio.currentTime = (clickX/width) * duration

}

//Event Listeners
playBtn.addEventListener('click', ()=>{
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})

//change somg Events
preBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)


audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)


audio.addEventListener('ended', nextSong)