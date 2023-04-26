/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
    let products = [];

    try {
        const response =
            await fetch(`${import.meta.env.VITE_PRESTASHOP_API_URL}/${import.meta.env.VITE_PRESTASHOP_API_FILTER}`, {
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json",
                        "authorization": `Basic ${import.meta.env.VITE_PRESTASHOP_API_KEY}`
                    }
                }
            );

        const responseJson = await response.json();
        products = responseJson?.products;

        const results = await Promise.all(products.map(p => loadProduct(p.id)));

        console.log(`Loaded ${results.length} products...`)
        return {products: results}
    } catch (error) {
        console.error(error.message)
    }

    return {products: []};
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