import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`

${normalize}

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

.body {
    max-width: 900px;
    margin: 0 auto;
    font-size: 16px;
    font-family: 'Jura', sans-serif;
    
}

#root {
    text-align: center;
}
`

