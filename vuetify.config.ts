import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        colors: {
          background: "#eae3e5",
          surface: "#ece7e9",
          "surface-dim": "#ded3d5",
          "surface-bright": "#ece7e9",
          "on-surface": "#322526",
          outline: "#69645f",
          "outline-variant": "#a29e97",
          primary: "#E91E63",
          "on-primary": "#ffdae2",
          secondary: "#dd016d",
          "on-secondary": "#ffdaf2",
          tertiary: "#91515a",
          "on-tertiary": "#f1e7eb",
          error: "#ba1a1a",
          "on-error": "#ffffff",
          "surface-light": "#e7dfe1",
        },
        dark: true,
        variables: {
          "overlay-background": "#262322",
        },
      },
      dark: {
        colors: {
          background: "#403132",
          surface: "#160d0e",
          "surface-dim": "#160d0e",
          "surface-bright": "#695353",
          "on-surface": "#e3dadc",
          outline: "#7f7a73",
          "outline-variant": "#504c49",
          primary: "#E91E63",
          "on-primary": "#ffc0cf",
          secondary: "#ff97d6",
          "on-secondary": "#a3044f",
          tertiary: "#c2bfd6",
          "on-tertiary": "#693c41",
          error: "#ffb4ab",
          "on-error": "#690005",
          "surface-light": "#695353",
        },
        dark: true,
        variables: {
          "overlay-background": "#262322",
        },
      },
    },
  },
});
