import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'hover-color':'#e6e898',
        'large':'#0932C3',
<<<<<<< Updated upstream
        'small':'#e9d6ee'
=======
        'small':'#e9d6ee',
        'placeholder': '#d9d9d9',
        'placeholder-text':'#333333',
        'button': '#2b8f41',
        'principles': '#F7F7FA',
        'booking': '#E9D6EE',
>>>>>>> Stashed changes
      }
    },
  },
  plugins: [],
}
export default config
