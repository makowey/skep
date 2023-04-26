/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
    let products = [];
    try {
        const response = await fetch(`${import.meta.env.VITE_PRODUCTS_API}`, {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                }
            }
        );

        products = await response.json();
    } catch (error) {
        console.error(error.message)
    }

    return products;
}