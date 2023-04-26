/** @type {import('./$types').PageLoad} */
export async function load({params, fetch}) {
    let product = {};
    try {
        const response = await fetch(`${import.meta.env.VITE_PRODUCTS_API}/${params.id}`, {
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