/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [

    ],
    theme: {
        container: {
            center: true,
            padding: '.75rem',
            width: {
                default: '100%',
                'sm': '540px',
                'md': '720px',
                'lg': '960px',
                'xl': '1140px',
                'xxl': '1400px',
            },
        },
        screens: {
            'sm': '576px',
            'md': '768px',
            'lg': '992px',
            'xl': '1200px',
            'xxl': '1400px',
        },
        extend: {
            colors: {
                primary: {
                    50: '#EBFAEB',
                    700: '#2BB666',
                }
            },
        },
    },
    plugins: [],
}