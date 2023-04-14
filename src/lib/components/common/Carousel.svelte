<script>
    import Carousel from 'svelte-carousel'

    export let images = [];
</script>

<Carousel
        autoplayDuration={0}
        duration={5000}
        autoplay
        timingFunction="linear"
        dots={true}
        arrows={true}
        swiping={false}
>
    {#each images as image}
        <img src={image.url} alt="{image.id}">
    {/each}
</Carousel>