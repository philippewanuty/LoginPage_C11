import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
 font-family: 'Titillium Web', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}
   

  }
`;
