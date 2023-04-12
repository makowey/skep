/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    // if (event.url.pathname.startsWith('/blog')) {
    //     return new Response('custom response');
    // }
    return await resolve(event);
}

// /** @type {import('@sveltejs/kit').HandleServerError} */
// export function handleError({ error, event }) {
//     const errorId = crypto.randomUUID();
//     // example integration with https://sentry.io/
//     Sentry.captureException(error, { event, errorId });
//
//     return {
//         message: 'Whoops!',
//         errorId
//     };
// }