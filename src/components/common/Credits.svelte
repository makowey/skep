<script>
    import credits from "$lib/app";
    import {fade, fly} from "svelte/transition";

    export let showCredits = true;
    let infos = credits();
</script>

{#if showCredits}
    <label for="info" class="modal modal-open cursor-pointer">
        <label class="modal-box relative selection-none text-start" for="">
            <div class="bg-accent-content/10 w-full sticky top-0 text-accent-content/90">
                <label for="info" class="btn btn-sm btn-secondary btn-circle absolute -right-5 -top-5"
                       on:click={() => showCredits = false}
                       on:keypress>✕</label>
                <h3 class="text-md font-bold ml-2" in:fly={{ x: -100, duration: 500, delay: 100 }}>Features v.{infos[0].version}</h3>
                <hr/>
            </div>
            <div id="tooltip-content" class="py-4 text-sm font-Menlo">
                <ul>
                    {#each infos[0]?.features?.reverse() as info, index}
                        <li in:fly={{y: -100, duration: 500, delay: (300 + (infos[0].features.length - index) * 500) }} class="list-disc ml-6">{info}</li>
                    {/each}
                </ul>
            </div>
            <p class="-bottom-1 left-1 text-accent-content text-sm italic animate-pulse">SKEP - {new Date().getFullYear()}</p>
        </label>
    </label>
{/if}