<script>
    import {fade} from "svelte/transition";
</script>

<slot>
    <div class="center" in:fade={{ duration: 500, delay:600 }} out:fade={{ duration: 500, delay:100 }}>
        <div class="bg-yellow-300">
            <img src="https://www.webalive.com.au/wp-content/uploads/2019/09/ecommerce-website-features-infographic.jpg" class="h-full w-full" alt="E-Commerce best practices">
        </div>
    </div>
</slot>