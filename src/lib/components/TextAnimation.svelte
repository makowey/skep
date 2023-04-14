<script>
    import {fly} from "svelte/transition";
    export let text = '';
    export let customClass = '';

</script>

<div class="w-4/6 mx-auto" in:fly={{ y: -400, duration: 500 }}>
    <section class="wrapper">
        <div class="top">{text}</div>
        <div class="bottom" aria-hidden="true">{text}</div>
    </section>
</div>

<style>
    :root {
        --background-color: black;
        --text-color: hsl(0, 0%, 100%);
    }

    .wrapper {
        display: grid;
        place-content: center;
        background-color: var(--background-color);
        min-height: 5vh;
        font-family: "Menlo Regular", sans-serif;
        font-size: clamp(0.5rem, 1rem + 2vw, 2rem);
        font-weight: 30;
        text-transform: uppercase;
        color: var(--text-color);
        border-radius: 5px;
        margin-top: -4px;
    }

    .wrapper > div {
        grid-area: 1/1/-1/-1;
    }

    .top {
        clip-path: polygon(0% 0%, 100% 0%, 100% 48%, 0% 58%);
    }

    .bottom {
        clip-path: polygon(0% 60%, 100% 50%, 100% 100%, 0% 100%);
        color: transparent;
        background: -webkit-linear-gradient(177deg, black 53%, var(--text-color) 65%);
        background: linear-gradient(177deg, black 53%, var(--text-color) 65%);
        background-clip: text;
        -webkit-background-clip: text;
        transform: translateX(-0.02em);
    }

</style>