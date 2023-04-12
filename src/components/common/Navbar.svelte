<script>
    import Credits from "./Credits.svelte";
    import Icon from "@iconify/svelte";
    import SkepLogo from "../SkepLogo.svelte";

    export let showCredits;
</script>

<nav class="header w-full z-10 bg-stone-800">
    <label for="left-menu" class="btn btn-md btn-ghost drawer-button relative float-left text-white">
        <Icon icon="ic:round-menu" width="15"/>
    </label>

    <a data-sveltekit-reload href="#" id="title"><SkepLogo/></a>
    <div class="btn btn-md btn-ghost drawer-button relative float-right text-white"
         on:click={() => showCredits = !showCredits}>
        <Icon icon="material-symbols:data-info-alert" width="25"/>
    </div>

    <Credits bind:showCredits/>
</nav>

<style>
    nav {
        display: flex;
        min-height: 10vh;
        align-items: center;
        justify-content: center;
    }

    #title {
        color: rgb(255, 157, 0);
        text-decoration: none;
    }

    li a {
        text-decoration: none;
    }

    .header {
        position: sticky;
        top: 0;
    }
</style>
