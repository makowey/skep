export const menuEntries = [
    {
        url: "/",
        name: "Home",
        icon: "line-md:home-md-twotone"
    },
    {
        url: "/player",
        name: "Player",
        icon: "mdi:disc-player"
    },
    {
      url: "/featured",
      name: "Products",
      icon: "material-symbols:featured-play-list-outline"
    },
    {
        url: "/ping",
        name: "Ping",
        icon: "game-icons:ping-pong-bat"
    }
];

export let active = menuEntries[0].name;
export let appName = 'AMEC';
export let appDescription = 'SvelteKit E-commerce Platform';
export default menuEntries;
