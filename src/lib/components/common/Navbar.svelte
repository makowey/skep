<script>
    import Credits from "$lib/components/common/Credits.svelte";
    import Icon from "@iconify/svelte";
    import SvgLogo from "$lib/components/SvgLogo.svelte";

    export let showCredits;
    export let headerName;
</script>

<nav class="header w-full z-10 bg-stone-800">
    <label for="left-menu" class="btn btn-md btn-ghost drawer-button relative float-left text-white">
        <Icon icon="ic:round-menu" width="15"/>
    </label>

    <a data-sveltekit-reload href="#" id="title">
        <SvgLogo text={headerName}/>
    </a>
    <div class="btn btn-md btn-ghost drawer-button relative float-right text-white"
         on:click={() => showCredits = !showCredits}>
        <Icon icon="material-symbols:data-info-alert" width="25"/>
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
