/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                ran: ['Noto Sans Mono', 'monospace'],
                viga: ['Viga', 'sans-serif'],
            },
            container: {
                center: true,
            },
        },
    },
    plugins: [],
};
