import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundColor: {
  			'background': 'rgba(255,255,255,0.10)',
			'active': 'rgba(179,179,179,0.4)',
			'hovered': 'rgba(179,179,179,0.3)',
  		},
		backgroundImage: {
			'gradient-white': 'linear-gradient(144deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 49%, rgba(255,255,255,1) 100%);',
		},
		transitionProperty: {
			'width': 'width, max-width',
			'spacing': 'margin, padding',
		},
		borderColor: {
			'gradient': '#737373',
		}, 
  		borderRadius: {
  			'lg': 'var(--radius)',
  			'md': 'calc(var(--radius) - 2px)',
  			'sm': 'calc(var(--radius) - 4px)',
        	'apple': '38px',
			'tab-close': '50px',
			'tab-open': '37px'
  		},
		backdropBlur: {
			'apple': '42.32px',
		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
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
  			}
  		},
		animation: {
			pageSpawn: "pageSpawn 0.8s ease-out",
			tabSpawn: "tabSpawn 0.5s ease-in-out",
			containerSpawn: "containerSpawn 0.5s ease-in-out"
		},
		keyframes: {
			pageSpawn: {
				"0%": { opacity: "0", transform: "translateY(100px)" },
				"100%": { opacity: "1", transform: "translateY(0)" }
			},
			tabSpawn: {
				"0%": { opacity: "0", transform: "translateX(-100px)" },
				"100%": { opacity: "1", transform: "translateX(0)" }
			},
			containerSpawn: {
				"0%": { opacity: "0", transform: "translateY(100px)" },
				"100%": { opacity: "1", transform: "translateY(0)" }
			}
		},
		screens: {
			"sm": "700px",
			"md": "1000px",
			"lg": "1200px",
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
