<script>
    import {page} from '$app/stores';
    import LeftMenu from "$lib/components/common/LeftMenu.svelte";
</script>

<LeftMenu>
    <main>
        <div class="flex flex-auto text-lime-50">
            <div class="center">
                <div class="m-auto left-1/4 absolute">
                    <img src="/errors/page_not_found.svg" alt="Server error illustration">
                    <h1 class="text-accent-content">{$page.status}: {$page.error.message}</h1>
                    <p class="relative float-right -top-9">
                        <a class="btn btn-primary" href="/">Go to homepage</a>
                    </p>
                </div>
            </div>
        </div>
    </main>
</LeftMenu>














