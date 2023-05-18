<script>
    import {browser} from "$app/environment";
    import {navigating} from "$app/stores";
    import playlist from "$lib/playlist.js";

    export let songList = [];
    let songIndex = 0;
    let selectedSong = {};
    let playPause;
    let backward;
    let forward;

    let circleBig;
    let circleSm;

    // control button images
    const playImg = "/assets/play.svg";
    const pauseImg = "/assets/pause.svg";

    let isPlaying = false;

    let songName;
    let audio;
    let coverArt;
    let musicbox;

    $: if (!$navigating && browser) {
        // preloaded song
        loadMusic();
    }

    function loadMusic() {
        selectedSong = songList[songIndex];
    }

    function playSong() {
        audio.play();
    }

    function pauseSong() {
        audio.pause();
    }

    function nextPlay() {
        songIndex = songIndex + 1;
        if (songIndex > songList.length - 1) {
            songIndex = 0;
        }

        loadMusic();
        playSong();
    }

    function backPlay() {
        songIndex = songIndex - 1;
        if (songIndex < 0) {
            songIndex = songList.length - 1;
        }
        loadMusic();
        playSong()
    }

    function playHandler() {
        isPlaying = !isPlaying;
        playPause.src = !isPlaying ? playImg : pauseImg;
        return isPlaying ? playSong() : pauseSong();
    }

    let selection = '';
    $: if (selection) {
        songList = playlist.filter(song => song?.name?.toLowerCase().indexOf(selection.toLowerCase()) > -1 ||
            song?.artist?.toLowerCase().indexOf(selection.toLowerCase()) > -1);
        if (songList.length === 0) {
            songList = [];
        }
    } else {
        songList = [...playlist];
    }

    function playAnother(index) {
        songIndex = index;
        loadMusic();
        audio.autoplay = true;
        isPlaying = true;
        playPause.src = !isPlaying ? playImg : pauseImg;
    }
</script>

<section id="home">
    <div class="container">
        <div class="playbox p-2 m-2 bg-accent-content/10">
            <div class="playlist">
                <input type="text" bind:value={selection} class="m-2 w-[calc(90%)] border-1"
                       placeholder="search for a song..."/>
                <div id="musicbox" bind:this={musicbox} class="musicbox h-full">
                    <ul class="overflow-y-scroll h-36">
                        {#each songList as song, index}
                            <li>
                                <h3 class="cursor-pointer hover:bg-accent/100 text-xs -p-2 -mt-1"
                                    class:italic={song.name === selectedSong?.name}
                                    class:text-red-800={song.name === selectedSong?.name}
                                    class:animate-pulse={song.name === selectedSong?.name}

                                    on:click={() => playAnother(index)}>
                                    {song.name} - <span class:text-xs={true}>{song?.artist}</span>
                                </h3>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>

            <div class="m-auto -mt-3">
                <div bind:this={circleBig} class="circle" class:animate={isPlaying}>
                    <div bind:this={circleSm} class="circle2" class:animate={isPlaying}>
                        <img bind:this={coverArt} src={selectedSong?.cover} class="fluid-img" alt="cover">
                    </div>
                </div>

                <div class="songs">
                    <h2 bind:this={songName} class="text-center -mt-8">{selectedSong?.name}</h2>
                    <h5 class="text-xs text-center">{selectedSong?.artist}</h5>
                    <div class="controls grid grid-cols-3 ml-10 w-full mt-2">
                        <audio bind:this={audio} src={selectedSong?.source}></audio>
                        <img bind:this={backward} on:click={() => backPlay()} class="media-btn"
                             src="/assets/backward-button.png" alt="backward">
                        <img bind:this={playPause} on:click={() => playHandler()} class="media-btn" alt="play"
                             src="/assets/play.svg">
                        <img bind:this={forward} on:click={() => nextPlay()} class="media-btn"
                             src="/assets/fast-forward.png"
                             alt="forward">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .playbox {
        border-radius: 8px;
    }

    ul li {
        list-style: none;
        margin: 0.5rem;
    }

    .circle {
        width: 120px;
        height: 120px;
        background-color: #222427;
        border-radius: 50%;
        margin: 2rem auto;
        display: flex;
        border: 3px solid #37b0d8;
        border-top: 3px solid #0254ec;

    }

    .circle2 {
        width: 80px;
        height: 80px;
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
</style>