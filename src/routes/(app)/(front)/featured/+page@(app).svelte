<script>
    import {subtitle} from "$lib/store";
    import ArticleCard from "$lib/components/models/ArticleCard.svelte";
    import {navigating} from "$app/stores";
    import Loading from "$lib/components/Loading.svelte";
    import InfiniteScroll from "svelte-infinite-scroll";
    import TextAnimation from "$lib/components/TextAnimation.svelte";

    subtitle.set(false);

    /** @type {import('./$types').PageData} */
    export let data;

    let page = 0;
    let size = 5;
    let products = [];
    let allProducts = data?.products;

    $: products = [
        ...products,
        ...allProducts.splice(size * page, size * (page + 1) - 1)
    ];
</script>

<slot>
    <TextAnimation text="Products"/>

    {#if $navigating}
        <Loading/>
    {:else}
        <div class="my-12 mx-auto px-4 md:px-12 shadow-inner">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="products">
                {#each products as product}
                    <ArticleCard article={product}/>
                {/each}
                <InfiniteScroll threshold={10} on:loadMore={() => page++}/>
            </div>
        </div>
    {/if}

</slot>

<style>
    #products {
        max-height: 600px;
        overflow-y: scroll;
    }
</style>