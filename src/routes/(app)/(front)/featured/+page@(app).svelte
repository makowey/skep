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
    <TextAnimation text="Features"/>

    {#if $navigating}
        <Loading/>
    {:else}
        <div class="container my-12 mx-auto px-4 md:px-12 shadow-inner">
            <div class="flex flex-wrap -mx-1 lg:-mx-2" id="products">
                {#each products as product}
                    <div class="my-1 px-1 w-full md:mx-20 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3">
                        <ArticleCard article={product}/>
                    </div>
                {/each}
                <InfiniteScroll threshold={10} on:loadMore={() => page++} />
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