// Tailwind color configuration
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                nirmal: {
                    green: "#268222",
                    darkgreen: "#0b5828",
                    yellow: "#fab31f",
                    lightyellow: "#fee5b6",
                    lightgreen: "#d6ebd9",
                }
            },
        },
    },
    plugins: [],
};
export default config;
