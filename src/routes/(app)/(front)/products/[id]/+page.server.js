/** @type {import('./$types').PageLoad} */
export async function load({params, fetch}) {
    let product = {};
    try {
        const response = await fetch(`https://dummyjson.com/products/${params.id}`, {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                }
            }
        );

        product = await response.json();
    } catch (error) {
        console.error(error.message)
    }

    return {
        product
    };
}