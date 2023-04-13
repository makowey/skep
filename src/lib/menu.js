export const menuEntries = [
    {
        url: "/",
        name: "Home",
        icon: "line-md:home-md-twotone"
    },
    {
        url: "/ping",
        name: "Ping",
        icon: "game-icons:ping-pong-bat"
    }
];

export let active = menuEntries[0].name;
export let appName = 'SKEP';
export let appDescription = 'SvelteKit E-commerce Platform';
export default menuEntries;
