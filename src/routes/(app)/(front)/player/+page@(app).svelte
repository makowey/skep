<script>
    import {subtitle} from "$lib/store";
    import TextAnimation from "$lib/components/TextAnimation.svelte";
    import CEFAudioPlayer from "$lib/components/CEFAudioPlayer.svelte";

    subtitle.set(false);
</script>

<slot>
    <TextAnimation text="Cantari AMEC"/>
    <CEFAudioPlayer />
</slot>