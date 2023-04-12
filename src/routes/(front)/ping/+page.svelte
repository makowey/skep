<script>

    let message = '';
    let key = '';

    async function subscribe(event) {
        const form = event.target;
        const data = new FormData(form)

        await fetch('/api/ping', {
            method: 'POST',
            body: data
        }).then(r => r.json())
            .then(r => {
                message = r.message;
            })
    }

    console.log("PING>...")
</script>

<div id="flex flex-col h-screen justify-center items-center">
    <div class="m-auto mt-20">
        <form on:submit|preventDefault={subscribe}>
            <input type="password" bind:value={key}
                   class="input input-bordered max-w-sm w-1/2 animate-bounce text-center"
                   placeholder="type your key" name="key"/>
            <button type="submit" class="btn btn-secondary">Check</button>
        </form>
        <p class="text-error text-sm text-center">{message}</p>
    </div>
</div>
