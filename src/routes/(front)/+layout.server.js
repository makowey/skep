import {appDescription, appName, menuEntries} from "$lib/menu";

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
    return {
        menuEntries,
        appDescription,
        appName
    }
}