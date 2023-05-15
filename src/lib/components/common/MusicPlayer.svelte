<script>
    import {browser} from "$app/environment";
    import playlist from "$lib/playlist.js";

    $: if (browser) {
        // media controllers
        const playPause = document.getElementById("play-stop");
        const backward = document.getElementById("backward");
        const forward = document.getElementById("forward");

        // record player animation
        const circleBig = document.getElementById("circle-bg");
        const circleSm = document.getElementById("circle-sm");

        // playing song
        const songName = document.getElementById("song-name");
        const audio = document.getElementById("audio");
        const coverArt = document.getElementById("cover");
        const musicbox = document.getElementById("musicbox");

        // control button images
        let playImg = "/assets/play.svg";
        let pauseImg = "/assets/pause.svg";

        // default controls
        playPause.src = playImg;
        let isPlaying = true;

        const songList = playlist.map(song => {
            return {
                name: song.name,
                source: song.url,
                cover: song.cover
            }
        });

        // helper function
        function createEle(ele) {
            return document.createElement(ele);
        }

        function append(parent, child) {
            return parent.append(child);
        }

        // creating track list
        const ul = createEle('ul')

        function createPlayList() {
            songList.forEach((song) => {
                let h3 = createEle('h3');
                let li = createEle('li');

                li.classList.add("track-item");
                h3.innerText = song.name;
                append(li, h3);
                append(ul, li)
            })
            append(musicbox, ul);
        }

        let songIndex = 0;
        // preloaded song
        loadMusic(songList[songIndex]);


        function loadMusic() {
            coverArt.src = songList[songIndex].cover;
            songName.innerText = songList[songIndex].name;
            audio.src = songList[songIndex].source;
        }

        function playSong() {
            playPause.src = pauseImg;
            circleBig.classList.add("animate");
            circleSm.classList.add("animate");

            audio.play();
        }

        function pauseSong() {
            playPause.src = playImg;
            circleBig.classList.remove("animate");
            circleSm.classList.remove("animate");

            audio.pause();
        }

        function nextPlay() {
            songIndex++;
            if (songIndex > songList.length - 1) {
                songIndex = 0;
            }
            loadMusic(songList[songIndex]);
            playSong()
        }

        function backPlay() {
            songIndex--;
            if (songIndex < 0) {
                songIndex = songList.length - 1;
            }
            loadMusic(songList[songIndex]);
            playSong()
        }

        function playHandler() {
            isPlaying = !isPlaying;
            //console.log("Change: ",isPlaying)
            isPlaying ? pauseSong() : playSong();
        }


        // player event
        playPause.addEventListener("click", playHandler);
        backward.addEventListener("click", backPlay);
        forward.addEventListener("click", nextPlay);

        createPlayList();
    }
</script>

<section id="home">
    <div class="container">
        <div class="collection">
            <h1 class="heading">Zen Lofi Chillhop</h1>
            <p class="lead">Chill-out is a loosely defined form of popular music characterized by slow tempos and
                relaxed moods. Identified as a modern type of easy listening.</p>
            <hr class="hor">
            <div id="musicbox" class="musicbox">
                <h2>CEF Playlist</h2>
            </div>
        </div>

        <div class="playbox">
            <div class="controller">
                <div id="circle-bg" class="circle">
                    <div id="circle-sm" class="circle2"><img id="cover" src={playlist[0].cover} class="fluid-img"></div>
                </div>
                <div class="songs">
                    <h2 id="song-name">{playlist[0]?.name}</h2>
                    <div class="controls">
                        <audio id="audio" src={playlist[0]?.source} autoplay></audio>
                        <img id="backward" class="media-btn" src="/assets/backward-button.png">
                        <img id="play-stop" class="media-btn">
                        <img id="forward" class="media-btn" src="/assets/fast-forward.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --white-color: #ffffff;
    }

    body {
        font-family: 'Josefin Sans', sans-serif;
        width: 100%;
        background-image: linear-gradient(
                to right bottom,
                #118ab2,
                #0e92b9,
                #0b99c1,
                #07a1c8,
                #03a9cf,
                #37b0d8,
                #51b8e1,
                #66bfe9,
                #8cc7f2,
                #accff8,
                #c7d8fc,
                #dee2ff
        );
    }

    .container {
        max-width: 1200px;
        margin: auto;
        padding: 0 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 300;
        color: var(--white-color);
        margin: 1rem 0 1rem 0;
    }

    .heading {
        font-size: 32px;
    }

    /* end common style */

    #home .container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: row;
    }

    .collection {
        width: 50%;
        flex: 1;
        margin-top: 1.5rem;
    }

    .lead {
        max-width: 600px;
        font-weight: 400;
        color: #15253a;
        letter-spacing: 0.5px;
        line-height: 1.2rem;
    }

    .musicbox {
        margin-top: 1rem;
    }

    .musicbox ul li h3 {
        color: #15253a;
        font-weight: 400;
    }

    .hor {
        margin: 1rem 0 1rem 0;
        max-width: 500px;
        background-color: #c7d8fc;
    }

    .playbox {
        flex: 1;
        margin: 0.5rem auto;
        text-align: center;
        border-radius: 8px;
        background-color: #c7d8fc8c;
    }

    nav {
        display: block;
        margin: 3rem auto;
    }

    ul li {
        list-style: none;
        margin: 0.5rem;
    }

    ul li a {
        text-decoration: none;
        padding: 8px 15px;
        border-radius: 5px;
        color: var(--white-color);
        transition: all 300ms;
    }

    ul li a:hover {
        background-color: #c7d8fc8c;
    }

    .controller {
        margin: 2.5rem auto;
        width: 100%;
        max-width: 400px;
        min-height: 500px;
    }

    .circle {
        width: 250px;
        height: 250px;
        background-color: #222427;
        border-radius: 50%;
        margin: 2rem auto;
        display: flex;
        border: 3px solid #37b0d8;
        border-top: 3px solid #0254ec;

    }

    .circle2 {
        width: 180px;
        height: 180px;
        background-color: #252629;
        border-radius: 50%;
        border: 3px solid #282529;
        border-top: 3px solid #66bfe9;
        align-self: center;
        display: flex;
        margin: auto;

    }

    .circle2 .fluid-img {
        width: 100%;
        max-width: 160px;
        height: auto;
        border-radius: 50%;
        align-self: center;
        margin: auto;
    }

    #song-name {
        color: #15253a;
        font-weight: 400;
    }

    .circle.animate {
        animation: anticlock 6s infinite linear;
    }

    .circle2.animate {
        animation: clockwise 6s infinite linear;
    }

    .media-btn {
        width: 100%;
        max-width: 50px;
        height: auto;
        cursor: pointer;
        margin: auto 1rem;
    }

    @keyframes anticlock {
        from {
            transform: rotate(360deg);
        }
        to {
            transform: rotate(0deg);
        }
    }

    @keyframes clockwise {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 900px) {
        #home .container {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-direction: column-reverse;
        }

        .collection {
            width: 90%;
            flex: 1;
            margin: 1.5rem auto;
        }

        .playbox {
            flex: 1;
            width: 90%;
        }
    }
</style>