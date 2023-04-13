<script>
    import {randomIntFromInterval} from "$lib/js/utils";

    const randomNumber = randomIntFromInterval(1, 1000);
    const isNew = randomNumber % 3 === 0;
    export let article = {
        id: randomNumber,
        title: "Article Title",
        price: "20",
        brand: "Brand",
        category: "Category",
        description: "Something about...",
        thumbnail: "https://picsum.photos/600/400/?" + randomNumber,
        images: ["https://picsum.photos/32/32/?" + randomNumber],
    };
</script>

<div class="card w-96 h-96 bg-base-100 shadow-xl">
    <figure><img src="{article.images[0]}" alt="{article.title}" class="w-full image-full"/></figure>
    <div class="card-body">
        <h2 class="card-title">
            {article.title}

            {#if isNew}
                <div class="badge badge-secondary">NEW</div>
            {/if}
        </h2>
        <p>{article.description}</p>
        <div class="card-actions justify-end">
            <div class="badge badge-outline hover:bg-accent-focus/70 cursor-pointer">{article.brand}</div>
            <div class="badge badge-outline hover:bg-accent-focus/70 cursor-pointer">{article.category}</div>
        </div>
    </div>
</div>