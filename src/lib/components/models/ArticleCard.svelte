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

<div class="shadow-md rounded-lg overflow-hidden">
    <div class="flex-shrink-0">
        <img src="{article.images[0]}" alt="{article.title}" class="h-48 w-full object-cover">
    </div>
    <div class="p-4">
        <div class="font-semibold text-xl mb-2">{article.title}</div>
        <p class="text-base mb-4">{article.description}</p>
        <div class="mb-4">
            <span class="text-sm">Tags:</span>
            <span class="text-sm ml-1">{article.brand}</span>
            <span class="text-sm ml-1">{article.category}</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="font-medium">${article.price}</span>
            <button class="bg-accent-content/70 hover:bg-accent-content/50 text-white font-bold py-2 px-4 rounded">Buy Now</button>
        </div>
    </div>
</div>