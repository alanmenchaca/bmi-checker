/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'pale-sand': '#F0EEEA',
                'desert-sand': '#EAE8E1',
                'driftwood': '#827C6A',

                'light-green': '#F1F8E8',
                'lighter-green': '#D8EFD3',
                'medium-green': '#95D2B3',
                'dark-green': '#365845',

                secondary: {
                    'blue': '#363959',
                    'accent-blue': '#DCE4EA',
                    'purple': '#533659',
                    'accent-purple': '#E7DFEA',
                },
            }
        },
    },
    plugins: [],
}

