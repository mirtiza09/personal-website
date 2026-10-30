// Colors point at the neubrutalism CSS tokens in assets/scss/_theme-variables.scss.
// The tokens switch on html[data-theme], so Theme UI only tracks which mode is on.
const theme = {
  config: {
    initialColorModeName: "light",
    useColorSchemeMediaQuery: false,
    useRootStyles: false,
  },
  colors: {
    text: "var(--text)",
    background: "var(--bg)",
    primary: "var(--ink)",
    accent: "var(--yellow)",
    muted: "var(--muted)",
    cardBg: "var(--surface)",
    modes: {
      dark: {},
    },
  },
  links: {
    postLink: {
      color: "text",
      textDecoration: "none",
      "&:hover": {
        bg: "var(--yellow)",
        color: "var(--black)",
      },
    },
  },
}

export default theme
