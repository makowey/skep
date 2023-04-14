<script>
    import ArticleView from "$lib/components/models/ArticleView.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="container mx-5 my-10">
    <ArticleView article={data.product}/>
</div>