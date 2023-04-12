<script>
    import {goto} from "$app/navigation";
    import Icon from "@iconify/svelte";

    export let theme;
</script>


<footer class="fixed footer-center -bottom-1 text-white z-10 w-full bg-stone-800 h-10">
    <button on:click={() => goto("https://discord.gg/Vu5bUHSEyE")}
            class="btn btn-xs cursor-pointer relative top-1.5 float-left left-1.5">
        <Icon icon="fontisto:discord"/>
    </button>
    <div class="dropdown dropdown-top float-right  bottom-0.5">
        <label tabindex="0" class="btn btn-sm m-1 capitalize text-xs">
            <Icon icon="mdi:theme-light-dark"/> {theme}</label>
        <ul tabindex="0"
            class="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-24 right-2 text-xs text-accent-content/90">
            <li><a href="#cmyk" on:click={() => theme = 'cmyk'}>cmyk</a></li>
            <li><a href="#retro" on:click={() => theme = 'retro'}>retro</a></li>
            <li><a href="#wireframe" on:click={() => theme = 'wireframe'}>wireframe</a></li>
            <li><a href="#dark" on:click={() => theme = 'dark'}>dark</a></li>
            <li><a href="#coffee" on:click={() => theme = 'coffee'}>coffee</a></li>
        </ul>
    </div>
</footer>