<script>
    import Icon from "@iconify/svelte";

    export let active = 'home';
</script>

<div class="drawer">
    <input id="left-menu" type="checkbox" class="drawer-toggle"/>
    <div class="drawer-content">
        <slot/>
    </div>
    <div class="drawer-side">
        <label for="left-menu" class="drawer-overlay"></label>
        <ul class="menu rounded-box p-4 w-36 bg-base-100 text-base-content">
            <!-- Sidebar content here -->
            <li class="{active === 'home' ? 'btn-secondary' : ''} mt-2" on:click={() => active = 'home'}>
                <a href="/">
                    <Icon icon="line-md:home-md-twotone" class="hover:animate-bounce"/>
                    Home
                </a>
            </li>
            <li class="{active === 'ping' ? 'btn-secondary' : ''}" on:click={() => active = 'ping'}>
                <a href="/ping">
                    <Icon icon="game-icons:ping-pong-bat" class="hover:animate-bounce"/>
                    Ping
                </a>
            </li>
        </ul>
    </div>
</div>
