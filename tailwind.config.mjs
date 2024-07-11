/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'custom-gradient': 'linear-gradient(68.8deg, rgb(79 70 229) 1.8%, rgb(224 231 255) 31.8%, rgb(224 231 255) 56.2%, rgb(224 231 255) 89%)',
				"text-gradient": 'linear-gradient(69.5deg, rgb(1, 179, 201) 2.7%, rgb(255, 199, 89) 97.2%)'
			},
		},
	},
	plugins: [],
}
