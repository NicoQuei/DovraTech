import type { Config } from "tailwindcss";

/**
 * DOVRA TECH — Design tokens.
 * Dark-first. Near-black canvas, vibrant green brand accent.
 * Type: Space Grotesk (display) · DM Sans (body) · JetBrains Mono (technical).
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces (near-black, slightly cool)
        ink: {
          DEFAULT: "#06070A",
          900: "#06070A",
          800: "#0B0D12",
          700: "#11141B",
          600: "#171B24",
          500: "#1F2530",
        },
        line: {
          DEFAULT: "#1B2029",
          strong: "#2A313D",
        },
        // Foreground
        fg: {
          DEFAULT: "#EAEEEC",
          muted: "#8B95A7",
          faint: "#5A6373",
        },
        // Brand green
        brand: {
          DEFAULT: "#19E57D",
          bright: "#54FFA6",
          dim: "#0FA85C",
          50: "#E7FFF2",
          100: "#C2FFDD",
          200: "#8DFFC2",
          300: "#54FFA6",
          400: "#2DF38E",
          500: "#19E57D",
          600: "#0FA85C",
          700: "#0B7E45",
          800: "#085A31",
          900: "#053A20",
        },
        // Secondary accent (teal) for gradient depth
        accent: {
          DEFAULT: "#00D9C0",
          bright: "#4DEFDC",
        },
        danger: "#FF5C5C",
        warning: "#F5B544",
        info: "#4DA8FF",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // fluid display sizes
        "display-xl": ["clamp(3rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      maxWidth: {
        container: "80rem", // 1280px
        prose: "42rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(25,229,125,0.25), 0 0 40px -8px rgba(25,229,125,0.45)",
        "glow-sm": "0 0 24px -8px rgba(25,229,125,0.5)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.8)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "brand-radial":
          "radial-gradient(60% 60% at 50% 40%, rgba(25,229,125,0.18) 0%, rgba(0,217,192,0.06) 40%, transparent 70%)",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { opacity: "0" },
        },
        "scroll-cue": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(10px)", opacity: "0" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "marquee-x": "marquee-x var(--marquee-duration, 40s) linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.16,1,0.3,1) infinite",
        "scroll-cue": "scroll-cue 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
