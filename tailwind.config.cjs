const config = {
    content: [
        "./src/**/*.{html,js,svelte,ts}"
    ],

    theme: {
        extend: {
            fontFamily: {
                Menlo: ["Menlo Regular", "cursive"],
                Ubuntu: ["Ubuntu Regular", "cursive"]
            },
        },
    },

    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui"),
        require('tailwind-scrollbar')
    ],
    // daisyUI config (optional)
    daisyui: {
        styled: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
        themes: ["coffee", "cmyk", "dark", "retro", "wireframe"]
    },
    darkMode: 'class',
};

module.exports = config;