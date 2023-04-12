<script>
    import SkepLogo from "../../components/SkepLogo.svelte";
    import {fade} from "svelte/transition";
</script>

<slot>
    <div class="center" in:fade={{ duration: 500, delay:600 }} out:fade={{ duration: 500, delay:100 }}>
        <SkepLogo/>
    </div>
</slot>