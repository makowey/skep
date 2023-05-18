<script>
    export let images = [];
</script>

<div class="carousel w-full">
    {#each images as image, index}
        <div id="item{index}" class="carousel-item w-full">
            <img src={image.url} alt="{image.id}" class="w-full" />
        </div>
    {/each}
</div>
<div class="flex justify-center w-full py-2 gap-2">
    {#each images as image, index}
        <a href="#item{index}" class="btn btn-xs">{index + 1}</a>
    {/each}
</div>