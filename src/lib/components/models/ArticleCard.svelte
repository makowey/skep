<script>
    import {randomIntFromInterval} from "$lib/js/utils";
    import {goto} from "$app/navigation";

    const randomNumber = randomIntFromInterval(1, 1000);
    export let article = {
        id: randomNumber,
        name: "Article Title",
        price: "20",
        reference: "CP001",
        condition: "old",
        imageUrl: "",
        link_rewrite: "test-link",
        description: "Something about...",
        id_default_image: "https://picsum.photos/600/400/1",
        thumbnail: "https://picsum.photos/600/400/?" + randomNumber,
        images: ["https://picsum.photos/32/32/?" + randomNumber],
        associations: {
            categories: [],
            images: [],
            tags: []
        }
    };

    article.imageUrl = `${import.meta.env.VITE_PRESTASHOP_API_URL}/images/products/${article.id}/${article.id_default_image}`;
</script>

<div class="shadow-md rounded-lg overflow-hidden cursor-pointer" on:click={() => goto('/products/' + article.id)}>
    <div class="flex-shrink-0">
        <img src="{article?.imageUrl}" alt="{article.name}" class="h-48 w-full object-cover">
    </div>
    <div class="p-4">
        <div class="font-semibold text-xl mb-2">{article.name}</div>
        <p class="text-base mb-4">{@html article.description?.substring(0, 200).concat("...")}</p>
        <div class="mb-4">
            <!--            <span class="text-md text-info ml-1 float-left">Ref: {article.reference}</span>-->
            <!--            <span class="text-sm">Tags:</span>-->
            <!--            {#each article?.associations?.tags as tag}-->
            <!--                <span class="text-sm ml-1">{tag.id}</span>-->
            <!--            {/each}-->
        </div>
        <div class="flex items-center justify-between">
            <span class="font-medium">{parseFloat(article.price).toFixed(2)} RON</span>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cumpără</button>
        </div>
    </div>
</div>