<script>
    import Icon from "@iconify/svelte";

    import Credits from "$lib/components/common/Credits.svelte";
    import SvgLogo from "$lib/components/SvgLogo.svelte";

    export let showCredits;
    export let headerName;
</script>

<nav class="header w-full z-10 bg-stone-800">
    <label for="left-menu" class="btn btn-md btn-ghost drawer-button absolute left-1.5 text-white">
        <Icon icon="ic:round-menu" width="45"/>
    </label>

    <a data-sveltekit-reload href="#" id="title">
        <SvgLogo text={headerName}/>
    </a>
    <div class="btn btn-md btn-ghost drawer-button absolute right-1.5 text-white"
         on:click={() => showCredits = !showCredits}>
        <Icon icon="arcticons:model3d" width="35"/>
    </div>

    <Credits bind:showCredits appName={headerName}/>
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
