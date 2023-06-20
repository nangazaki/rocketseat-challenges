import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style/themes/default'
import { GlobalStyle } from './style/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
