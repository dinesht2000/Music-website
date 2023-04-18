const music = new Audio('audio/1.mp3');
const songs = [
    {
        id: "1",
        songName: `On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpg"
    },
    {
        id: "2",
        songName: `Faded <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/2.jpg",
    },
    {
        id: "3",
        songName: `Cartooon-On & On <br>
        <div class="subtitle">Daniel Levi</div>`,
        poster: "images/3.jpg",
    },
    {
        id: "4",
        songName: `Warriyo - Mortals <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/4.jpg",
    },
    {
        id: "5",
        songName: `Ertugrul Gazi <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/5.jpg",
    },
    {
        id: "6",
        songName: `Electronic Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/6.jpg",
    },
    {
        id: "7",
        songName: `Agar tum saath ho <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/7.jpg",
    },
    {
        id: "8",
        songName: `Suna Hai <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/8.jpg",
    },
    {
        id: "9",
        songName: `Dilbar <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/9.jpg",
    },
    {
        id: "10",
        songName: `On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/10.jpg"
    },
    {
        id: "11",
        songName: `Faded <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/11.jpg",
    },
    {
        id: "12",
        songName: `Cartooon-On & On <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/12.jpg",
    },
    {
        id: "13",
        songName: `Warriyo - Mortals <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/13.jpg",
    },
    {
        id: "14",
        songName: `Ertugrul Gazi <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/14.jpg",
    },
    {
        id: "15",
        songName: `Electronic Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/15.jpg",
    },
    {
        id: "16",
        songName: `Agar tum saath ho <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/16.jpg",
    },
    {
        id: "17",
        songName: `Suna Hai <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/17.jpg",
    },
]
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.add('bi-pause-circle-fill');
        masterPlay.classList.remove('bi-play-circle-fill')
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-circle-fill');
        masterPlay.classList.add('bi-play-circle-fill')
    }
})

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 300;
})
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 300;
})

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementsByClassName("item")[0];

pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 300;
})
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 300;
})

const make_all_background = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}
const make_all_play = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}



let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `/images/${index}.jpg`;
        music.play();
        masterPlay.classList.add('bi-pause-circle-fill');
        masterPlay.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');

        let songtitle = songs.filter((els) => {
            return els.id == index;
        });
        songtitle.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        })
        make_all_background();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        make_all_play();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');

    })


})

let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_cur = music.currentTime;
    let music_dur = music.duration;
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentend.innerHTML = `${min1}:${sec1}`;

    let min2 = Math.floor(music_cur / 60);
    let sec2 = Math.floor(music_cur % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentstart.innerHTML = `${min2}:${sec2}`;

    let progressbar = parseInt((music_cur / music_dur) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

})
seek.addEventListener('change', () => {
    music.currentTime = (seek.value * music.duration) / 100;
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];


vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    music.volume = vol_a / 100;

})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `/images/${index}.jpg`;
    music.play();
    masterPlay.classList.add('bi-pause-circle-fill');
    masterPlay.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');

    let songtitle = songs.filter((els) => {
        return els.id == index;
    });
    songtitle.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    })
    make_all_background();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    make_all_play();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');

})
next.addEventListener('click',()=>{
    index++;
    let last=Array.from(document.getElementsByClassName('songItem')).length;
    if(index>last){
        index=1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `/images/${index}.jpg`;
    music.play();
    masterPlay.classList.add('bi-pause-circle-fill');
    masterPlay.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');

    let songtitle = songs.filter((els) => {
        return els.id == index;
    });
    songtitle.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    })
    make_all_background();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    make_all_play();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');

})


