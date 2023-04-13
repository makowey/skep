<script>
    import "../../app.postcss";
    import {setContext} from 'svelte';
    import {browser} from "$app/environment";

    import {settings} from "$lib/store";
    import menuEntries from "$lib/menu";

    import LeftMenu from "$lib/components/common/LeftMenu.svelte";
    import Footer from "$lib/components/common/Footer.svelte";
    import Navbar from "$lib/components/common/Navbar.svelte";

    let initialized = false;
    let showCredits = false;
    const defaultTheme = 'retro';

    let theme;
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
    $: console.log(`Default settings: ${JSON.stringify($settings)}`)
</script>

<svelte:head>
    <title>SKEP - Svelte Kit E-commerce Platform</title>
</svelte:head>


<section data-theme={ theme }>

    <LeftMenu {menuEntries}>
        <Navbar bind:showCredits headerName="SKEP"/>
        <p class="text-center text-info text-sm mt-2">SvelteKit E-commerce Platform</p>

        <main class="container mx-auto mt-5 bg-base-200/100 h-screen max-h-[calc(60%-3rem)] rounded border-2 border-accent-content/20">
            <!-- +page.svelte is rendered in this <slot> -->
            <slot/>
        </main>

        <Footer bind:theme/>
    </LeftMenu>

</section>
