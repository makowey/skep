/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
    let products = [];
    try {
        const response = await fetch(`https://dummyjson.com/products`, {
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