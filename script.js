const mainContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const preBtn = document.querySelector('prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//Song titles
const songs = ['Delhi', 'if the world was ending', 'kabira', 'What other people say']

//keep track of songs
let songIndex = 2;

//initially load song into DOM
loadSong(songs[songIndex])

const loadSong = (song) => {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}



