<script>
    import MusicPlayer from '../components/common/MusicPlayer.svelte'
    import playlist from "$lib/playlist.js";
</script>

<MusicPlayer songList={playlist}/>
