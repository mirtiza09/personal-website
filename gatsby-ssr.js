const React = require("react")

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Syne:wght@700;800&display=swap"

// Sets data-theme before first paint from the mode Theme UI stored, so a
// returning dark-mode visitor never sees a light flash. Light is the default.
const themeScript = `(function(){try{var m=localStorage.getItem("theme-ui-color-mode");document.documentElement.setAttribute("data-theme",m==="dark"?"dark":"light")}catch(e){document.documentElement.setAttribute("data-theme","light")}})();`

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en", "data-theme": "light" })
  setHeadComponents([
    <script key="nb-theme" dangerouslySetInnerHTML={{ __html: themeScript }} />,
    <link key="gf-pre" rel="preconnect" href="https://fonts.googleapis.com" />,
    <link
      key="gf-static"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link key="gf-css" rel="stylesheet" href={FONTS_URL} />,
  ])
}
