import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`

${reset}
*{
  list-style:none;
}
`;

export default GlobalStyles;
