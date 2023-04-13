<script>
    import {fade} from "svelte/transition";
    import {subtitle} from "$lib/store";

    subtitle.set(true);
</script>

<slot>
    <div class="center" in:fade={{ duration: 300, delay:100 }} out:fade={{ duration: 300, delay:100 }}>
        <img src="https://www.webalive.com.au/wp-content/uploads/2019/09/ecommerce-website-features-infographic.jpg"
             class="h-full w-full" alt="E-Commerce best practices">
    </div>
</slot>
