import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				pixel: ['"Press Start 2P"', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				pixel: {
					green: 'hsl(var(--pixel-green))',
					blue: 'hsl(var(--pixel-blue))',
					red: 'hsl(var(--pixel-red))',
					yellow: 'hsl(var(--pixel-yellow))',
					purple: 'hsl(var(--pixel-purple))',
					orange: 'hsl(var(--pixel-orange))',
					pink: 'hsl(var(--pixel-pink))',
					brown: 'hsl(var(--pixel-brown))',
					gray: 'hsl(var(--pixel-gray))'
				},
				type: {
					grass: 'hsl(var(--type-grass))',
					poison: 'hsl(var(--type-poison))',
					fire: 'hsl(var(--type-fire))',
					water: 'hsl(var(--type-water))',
					electric: 'hsl(var(--type-electric))',
					psychic: 'hsl(var(--type-psychic))',
					ice: 'hsl(var(--type-ice))',
					dragon: 'hsl(var(--type-dragon))',
					dark: 'hsl(var(--type-dark))',
					fairy: 'hsl(var(--type-fairy))',
					normal: 'hsl(var(--type-normal))',
					fighting: 'hsl(var(--type-fighting))',
					flying: 'hsl(var(--type-flying))',
					ground: 'hsl(var(--type-ground))',
					rock: 'hsl(var(--type-rock))',
					bug: 'hsl(var(--type-bug))',
					ghost: 'hsl(var(--type-ghost))',
					steel: 'hsl(var(--type-steel))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
