import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Primary structural color — deep navy #08062B
        navy: {
          50:  { value: "#f0f0f7" },
          100: { value: "#d3d2e8" },
          200: { value: "#a8a6d3" },
          300: { value: "#7d7abf" },
          400: { value: "#534eaa" },
          500: { value: "#342e8a" },
          600: { value: "#231e6b" },
          700: { value: "#140f4f" },
          800: { value: "#08062b" },
          900: { value: "#040316" },
          950: { value: "#020109" },
        },
        // Primary action color — electric blue #00D2FF
        electric: {
          50:  { value: "#e6faff" },
          100: { value: "#b3f0ff" },
          200: { value: "#80e7ff" },
          300: { value: "#4ddeff" },
          400: { value: "#1ad4ff" },
          500: { value: "#00d2ff" },
          600: { value: "#00a9cc" },
          700: { value: "#007d99" },
          800: { value: "#005266" },
          900: { value: "#002733" },
          950: { value: "#001319" },
        },
        // Data visualization accent — high-contrast data pink
        datapink: {
          50:  { value: "#fff0f5" },
          100: { value: "#ffd1e8" },
          200: { value: "#ffb3d6" },
          300: { value: "#ff85be" },
          400: { value: "#ff57a6" },
          500: { value: "#ff2d8e" },
          600: { value: "#e0006a" },
          700: { value: "#a80050" },
          800: { value: "#700035" },
          900: { value: "#38001b" },
          950: { value: "#1c000e" },
        },
      },
      fonts: {
        heading: { value: "var(--font-geist-sans), sans-serif" },
        body:    { value: "var(--font-geist-sans), sans-serif" },
        mono:    { value: "var(--font-geist-mono), monospace" },
      },
      // 4px baseline per design spec; 8px for focal containers/search
      radii: {
        sm: { value: "4px" },
        md: { value: "4px" },
        lg: { value: "8px" },
        xl: { value: "8px" },
      },
      shadows: {
        ambient:   { value: "0px 4px 20px rgba(8, 6, 43, 0.04)" },
        focusBlue: { value: "0 0 0 2px rgba(0, 210, 255, 0.1)" },
      },
    },
    semanticTokens: {
      colors: {
        // --- Backgrounds (tonal layers per design spec) ---
        "bg.default": { value: { base: "white",            _dark: "{colors.navy.900}" } },
        "bg.subtle":  { value: { base: "#f4f6f8",          _dark: "{colors.navy.800}" } },
        "bg.muted":   { value: { base: "#e2e8f0",          _dark: "{colors.navy.700}" } },
        "bg.surface": { value: { base: "white",            _dark: "{colors.navy.800}" } },

        // --- Foreground ---
        "fg.default":  { value: { base: "{colors.navy.800}", _dark: "white" } },
        "fg.muted":    { value: { base: "#718096",           _dark: "#a0aec0" } },
        "fg.subtle":   { value: { base: "#a0aec0",           _dark: "#718096" } },
        "fg.inverted": { value: { base: "white",             _dark: "{colors.navy.800}" } },

        // --- Borders (Level 1: 1px #E2E8F0 per design spec) ---
        "border.default": { value: { base: "#e2e8f0",       _dark: "{colors.navy.700}" } },
        "border.subtle":  { value: { base: "#f4f6f8",       _dark: "{colors.navy.800}" } },
        "border.muted":   { value: { base: "#e2e8f0",       _dark: "{colors.navy.700}" } },

        // --- Navy palette (primary buttons, nav, structural elements) ---
        "navy.solid":      { value: { base: "{colors.navy.800}", _dark: "{colors.navy.700}" } },
        "navy.muted":      { value: { base: "{colors.navy.100}", _dark: "{colors.navy.900}" } },
        "navy.subtle":     { value: { base: "{colors.navy.50}",  _dark: "{colors.navy.950}" } },
        "navy.fg":         { value: { base: "white",             _dark: "white" } },
        "navy.emphasized": { value: { base: "{colors.navy.700}", _dark: "{colors.navy.600}" } },
        "navy.focusRing":  { value: { base: "{colors.navy.800}", _dark: "{colors.navy.400}" } },

        // --- Electric palette (CTAs, search focus glow, ghost button icons) ---
        "electric.solid":      { value: { base: "{colors.electric.500}", _dark: "{colors.electric.400}" } },
        "electric.muted":      { value: { base: "{colors.electric.100}", _dark: "{colors.electric.900}" } },
        "electric.subtle":     { value: { base: "{colors.electric.50}",  _dark: "{colors.electric.950}" } },
        "electric.fg":         { value: { base: "{colors.navy.800}",     _dark: "{colors.navy.800}" } },
        "electric.emphasized": { value: { base: "{colors.electric.600}", _dark: "{colors.electric.300}" } },
        "electric.focusRing":  { value: { base: "{colors.electric.500}", _dark: "{colors.electric.400}" } },

        // --- Datapink palette (charts, data visualization only) ---
        "datapink.solid":      { value: { base: "{colors.datapink.500}", _dark: "{colors.datapink.400}" } },
        "datapink.muted":      { value: { base: "{colors.datapink.100}", _dark: "{colors.datapink.900}" } },
        "datapink.subtle":     { value: { base: "{colors.datapink.50}",  _dark: "{colors.datapink.950}" } },
        "datapink.fg":         { value: { base: "white",                 _dark: "white" } },
        "datapink.emphasized": { value: { base: "{colors.datapink.600}", _dark: "{colors.datapink.300}" } },
        "datapink.focusRing":  { value: { base: "{colors.datapink.500}", _dark: "{colors.datapink.400}" } },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
