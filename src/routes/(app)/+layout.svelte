<script>
    import "../../app.postcss";
    import {onMount, setContext} from 'svelte';
    import {browser} from "$app/environment";

    import {settings, subtitle} from "$lib/store.js";

    import LeftMenu from "$lib/components/common/LeftMenu.svelte";
    import Footer from "$lib/components/common/Footer.svelte";
    import Navbar from "$lib/components/common/Navbar.svelte";
    import menuEntries from "$lib/menu.js";

    let initialized = false;
    let showCredits = false;
    const defaultTheme = 'retro';

    /** @type {import('./$types').LayoutServerLoad} */
    export let data;

    let theme;
    let activeMenuEntry;

    onMount(() => {
        if (browser) activeMenuEntry = menuEntries.find(entry => entry.url === window.location.pathname).name || 'Home';
        console.log(activeMenuEntry)
    });

    let configs = {}
    $: if (!initialized && browser) {
        configs = JSON.parse(localStorage?.getItem('configs') || JSON.stringify({theme: defaultTheme}));
        theme = configs.theme || defaultTheme;
        console.log("Theme onMount()", theme);
        initialized = true;
    }

    // Create a store and update it when necessary...
    $: settings.set({...configs, "theme": theme})
    $: if (browser && initialized) {
        localStorage.setItem('configs', JSON.stringify($settings));
    }
    // ...and add it to the context for child components to access
    $: setContext('settings', $settings)
</script>

<svelte:head>
    <title>{data.appName} - {data.appDescription}</title>
</svelte:head>


<section data-theme={ theme }>

    <LeftMenu menuEntries={data.menuEntries} bind:active={activeMenuEntry}>
        <Navbar bind:showCredits headerName={data.appName}/>
        <p class="text-center text-info text-sm mt-2 {$subtitle ? '' : 'hidden'}">{data.appDescription}</p>

        <!-- ++page@(app).svelte is rendered in this <slot> -->
        <slot/>

        <Footer bind:theme/>
    </LeftMenu>

</section>
