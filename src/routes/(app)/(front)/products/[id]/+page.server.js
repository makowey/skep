/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    return {product: loadProduct(params.id)};
}

async function loadProduct(productId) {
    const response =
        await fetch(`${import.meta.env.VITE_PRESTASHOP_API_URL}/products/${productId}?output_format=JSON`, {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json",
                    "authorization": `Basic ${import.meta.env.VITE_PRESTASHOP_API_KEY}`
                }
            }
        );

    const responseJson = await response.json();
    return responseJson?.product;
}