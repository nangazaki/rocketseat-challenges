import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
    minHeight: '100vh'
})

export const Header = styled('header', {
  padding: '2rem 1rem',
  width: '100%',
  maxWidth: 1280,
  margin: '0 auto'
})