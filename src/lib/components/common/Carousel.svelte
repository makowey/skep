<script>
    export let images = [];
</script>

<div class="carousel w-full h-auto rounded-sm">
    {#each images as image}
        <div id="slide{image.id}" class="carousel-item relative w-full">
            <img src="{image.url}" class="w-full mask mask-squircle"/>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide{image.id === 1 ? images.length : image.id - 1}" class="btn btn-circle">❮</a>
                <a href="#slide{image.id === images.length ? 1 : image.id + 1}" class="btn btn-circle">❯</a>
            </div>
        </div>
    {/each}
</div>
