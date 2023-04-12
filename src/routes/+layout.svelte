<script>
    import "../app.postcss";
    import {fly} from "svelte/transition";
    import {setContext} from 'svelte';
    import {writable} from 'svelte/store';
    import {browser} from "$app/environment";
    import Icon from "@iconify/svelte";
    import {goto} from "$app/navigation";
    import Credits from "../components/common/Credits.svelte";

    const settings = writable({});
    let initialized = false;
    let showCredits = false;

    let theme;
    let configs = {}
    $: if (!initialized && browser) {
        configs = JSON.parse(localStorage?.getItem('bConfigs') || JSON.stringify({theme: 'retro'}));
        theme = configs.theme || 'retro';
        console.log("Theme onMount()", theme);
        initialized = true;
    }

    // Create a store and update it when necessary...
    $: settings.set({...configs, "theme": theme})
    $: if (browser && initialized) {
        localStorage.setItem('bConfigs', JSON.stringify($settings));
    }
    // ...and add it to the context for child components to access
    $: setContext('settings', $settings)
    $: console.log(`Default settings: ${JSON.stringify($settings)}`)
</script>

<svelte:head>
    <title>SKEP - Svelte Kit E-commerce Platform</title>
</svelte:head>

<section data-theme={ theme }>
    <nav class="header w-full z-10 bg-stone-800">
        <label for="left-menu" class="btn btn-md btn-ghost drawer-button relative float-left text-white">
            <Icon icon="ic:round-menu" width="15"/>
        </label>

        <a data-sveltekit-reload href="#" class="text-7xl max-md:text-5xl font-bold font-Poppins" id="title">SKEP</a>
        <div class="btn btn-md btn-ghost drawer-button relative float-right text-white"
             on:click={() => showCredits = !showCredits}>
            <Icon icon="material-symbols:data-info-alert" width="25"/>
        </div>

        <Credits bind:showCredits/>
    </nav>

    <main>
        <!-- +page.svelte is rendered in this <slot> -->
        <slot/>
    </main>
    <footer class="fixed footer-center -bottom-1 text-white z-10 w-full bg-stone-800 h-10">
        <button on:click={() => goto("https://discord.gg/Vu5bUHSEyE")}
                class="btn btn-xs cursor-pointer relative top-1.5 float-left left-1.5">
            <Icon icon="fontisto:discord"/>
        </button>
        <div class="dropdown dropdown-top float-right  bottom-0.5">
            <label tabindex="0" class="btn btn-sm m-1 capitalize text-xs">
                <Icon icon="mdi:theme-light-dark"/> {theme}</label>
            <ul tabindex="0" class="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-24 right-2 text-xs text-accent-content/90">
                <li><a href="#retro" on:click={() => theme = 'retro'}>retro</a></li>
                <li><a href="#wireframe" on:click={() => theme = 'wireframe'}>wireframe</a></li>
                <li><a href="#dark" on:click={() => theme = 'dark'}>dark</a></li>
                <li><a href="#coffee" on:click={() => theme = 'coffee'}>coffee</a></li>
            </ul>
        </div>
    </footer>
</section>

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
