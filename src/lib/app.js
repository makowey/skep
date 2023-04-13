const currentDate = new Date();
const currentMonth = currentDate.getMonth() < 10 ? ('0' + currentDate.getMonth()) : currentDate.getMonth();
const currentDay = currentDate.getDate() < 10 ? ('0' + currentDate.getDate()) : currentDate.getDate();

export function credits() {
    return [
        {
            "version": `${currentDate.getFullYear()}.${currentMonth}.${currentDay}`,

            "bugs": [],

            "messages": ["SvelteKit project template"],

            "features": [
                "Light/Dark theme with 5 variants. Right bottom page...",
            ],

            "TODO": []
        }
    ]
}

export default credits