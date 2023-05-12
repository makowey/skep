<script>
    import Icon from "@iconify/svelte";

    export let menuEntries = [
        {
            url: "/",
            name: "Home"
        }
    ];

    export let active = menuEntries[0].name;
</script>

<div class="drawer">
    <input id="left-menu" type="checkbox" class="drawer-toggle"/>
    <div class="drawer-content">
        <slot/>
    </div>
    <div class="drawer-side">
        <label for="left-menu" class="drawer-overlay"></label>
        <ul class="menu rounded-box p-4 w-48 bg-base-100 text-base-content">
            <!-- Sidebar content here -->
            {#each menuEntries as menuEntry}
                <li class="{active === menuEntry.name ? 'btn-secondary' : ''} mt-2"
                    on:click={() => active = menuEntry.name}>
                    <a href={menuEntry.url}>
                        <Icon icon={menuEntry.icon} class="hover:animate-bounce"/>
                        {menuEntry.name}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</div>
