<script>
    // import Aplayer from 'svelte-aplayer/dist/svelte/svelte-aplayer.es.js'
    // import 'svelte-aplayer/dist/svelte/style.css'

    import MusicPlayer from '../components/common/MusicPlayer.svelte'

    import playlist from "$lib/playlist.js";

    let selection = '';
    let songs;
    let message;

    $: if(selection) {
        songs = playlist.filter(song => song?.name?.toLowerCase().indexOf(selection.toLowerCase()) > -1 ||
            song?.artist?.toLowerCase().indexOf(selection.toLowerCase()) > -1);
        if(songs.length === 0) {
            songs = [...playlist];
        }
    } else {
        songs = [...playlist];
    }

    $: message = selection;
</script>


<input type="text" bind:value={selection} class="m-2 w-96 p-1" placeholder="search for a song..."/>
<!--<Aplayer audio={songs} volume={0.4} autoplay={true}/>-->
<MusicPlayer />
<p class="text-xs hidden ">{message}</p>