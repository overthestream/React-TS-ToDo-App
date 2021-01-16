import { createGlobalStyle } from 'styled-components'

import DXNPeriod from '../Fonts/DXNPeriod.ttf'
import DXPnM from '../Fonts/DXPnM.ttf'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: DXNPeriod;
    src: url(${DXNPeriod});
  }
  @font-face {
    font-family: DXPnM;
    src: url(${DXPnM});
  }
  
`
export default GlobalStyle
