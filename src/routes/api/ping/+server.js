// /api/newsletter GET

export const GET = async (event) => {
    const options = {
        status: 200, headers: {
            X: 'Gon give it to ya',
        }
    }

    return new Response('Pong!', options)
}

export const POST = async (event) => {
    const data = await event.request.formData()
    const key = data.get('key')
    const isSuccess = key === `${import.meta.env.VITE_TOKEN}`;

    // return success
    return new Response(
        JSON.stringify({success: isSuccess, message: isSuccess ? 'All good' : 'You provided wrong key...'}), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
}