import { createGlobalStyle } from '@xstyled/styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: bg;
    color: text;
    transition: background-color 0.3s ease;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    text-decoration:none
  }
`

export default GlobalStyles
