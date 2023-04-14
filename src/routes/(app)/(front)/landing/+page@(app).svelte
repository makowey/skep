<script>
    import {subtitle} from "$lib/store";
    import TextAnimation from "$lib/components/TextAnimation.svelte";

    subtitle.set(false);
</script>

<slot>
    <TextAnimation text="Landing"/>
</slot>