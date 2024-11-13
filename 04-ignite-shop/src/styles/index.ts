import { createStitches } from '@stitches/react'

import localFont from 'next/font/local'

const geistSans = localFont({
  src: "../pages/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const { 
  config, 
  keyframes, 
  getCssText, 
  styled, 
  globalCss, 
  css, 
  theme 
} = createStitches({
  theme: {
    colors: {
      green300: '#00B37E',
      green500: '#00875F',

      gray100: '#E1E1E6',
      gray300: '#C4C4CC',
      gray500: '#8D8D99',
      gray700: '#29292e',
      gray800: '#202024',
      gray900: '#121214',

      white: '#FFFFFF',
    },
    fonts: {
      geist: geistSans.style.fontFamily
    },
    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem'
    }
  },
})