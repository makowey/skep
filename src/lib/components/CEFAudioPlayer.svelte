<script>
    import Aplayer from 'svelte-aplayer/dist/svelte/svelte-aplayer.es.js'
    import 'svelte-aplayer/dist/svelte/style.css'
    import playlist from "$lib/playlist.js";

</script>

<Aplayer audio={playlist} volume={0.4}/>
