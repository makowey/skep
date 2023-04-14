<script>
    import Carousel from "$lib/components/common/Carousel.svelte";

    export let article = {
        id: 0,
        title: "Article Title",
        price: "20",
        brand: "Brand",
        category: "Category",
        description: "Something about...",
        thumbnail: "",
        images: [""],
        rating: 5
    };

    let counter = 1;
    let images = [];
    article.images.forEach(image => images.push({url: image, id: counter++}))
</script>

<div class="container mx-auto my-8 flex flex-col lg:flex-row">
    <!-- Product Image Panel -->
    <div class="w-[calc(90%)] h-auto">
        <Carousel {images} />
    </div>

    <!-- Product Info Panel -->
    <div class="w-full lg:w-1/2 p-8 flex flex-col justify-center">
        <!-- Product Title -->
        <h1 class="text-3xl font-bold mb-4">{article.title}</h1>

        <!-- Product Price -->
        <p class="text-2xl font-bold text-green-500 mb-8">${article.price}</p>

        <!-- Product Description -->
        <p class="text-lg mb-8">
            {article.description}
        </p>

        <!-- Product Features -->
        <div class="border-t border-gray-300 pt-8 mb-8">
            <h2 class="text-lg font-semibold mb-4">Features</h2>
            <ul class="list-disc list-inside">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
            </ul>
        </div>

        <!-- Product Reviews -->
        <div class="border-t border-gray-300 pt-8 mb-8">
            <h2 class="text-lg font-semibold mb-4">Reviews</h2>
            <ul class="list-inside">
                <li>
                    <p class="text-sm text-gray-600 mb-1">5 Stars</p>
                    <p class="text-sm">Great product!</p>
                </li>
                <li>
                    <p class="text-sm text-gray-600 mb-1">4 Stars</p>
                    <p class="text-sm">Good product, but could be better.</p>
                </li>
                <li>
                    <p class="text-sm text-gray-600 mb-1">3 Stars</p>
                    <p class="text-sm">Average product.</p>
                </li>
            </ul>
        </div>

        <!-- Buy Button -->
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8">Buy Now</button>
    </div>
</div>

