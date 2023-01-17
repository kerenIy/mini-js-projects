const songList = [
  {
    track_name: 'hello',
    track_no : '01',
  },
  {
    track_name: 'flaming hot cheetos',
    track_no : '02',
  },
  {
    track_name: 'b.o.m.d',
    track_no : '03',
  },
  {
    track_name: '4ever',
    track_no : '04',
  },
  {
    track_name: 'pretty girl',
    track_no : '05',
  },
  {
    track_name: 'how',
    track_no : '06',
  }
]
const songs = ["hello.m4a","bomd.m4a","4ever.m4a","pretty.m4a","how.m4a","cheetos.m4a"];

let trackNum = document.getElementById('track_no');
let trackName = document.getElementById('track_name');
let songPath = document.getElementById('path');

let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');
let pauseBtn = document.querySelector('.pause-btn');
let playBtn = document.querySelector('.play-btn');
let randomBtn = document.querySelector('.random-btn');

let playing = 0;
let audio = new Audio();

window.addEventListener('DOMContentLoaded', function() {
  pauseBtn.style.display = 'none';
});

playBtn.addEventListener('click', function () {
  isNowPlaying(playing);
  playBtn.style.display = 'none';
  pauseBtn.style.display = '';

});

pauseBtn.addEventListener('click', function () {
  isNowPlaying(playing);
  playBtn.style.display = '';
  pauseBtn.style.display = 'none';
  audio.pause();

});

function isNowPlaying(order) {
  let item = songList[order];
  trackNum.textContent = item.track_no;
  trackName.textContent = item.track_name;

  audio.src = songs[order];
  audio.play();
}
prevBtn.addEventListener('click', function() {
  playing --;
  if(playing < 0){
    playing = songList.length - 1;
  }
  isNowPlaying(playing);
});

nextBtn.addEventListener('click', function() {
  playing++
  if(playing > songList.length -1){
    playing = 0;
  }
  isNowPlaying(playing);
});

randomBtn.addEventListener('click', function () {
  playing = Math.floor(Math.random() * songList.length);
  if(playing > songList.length -1){
    playing --;
  }
  isNowPlaying(playing);
  playBtn.style.display = 'none';
  pauseBtn.style.display = '';
})
