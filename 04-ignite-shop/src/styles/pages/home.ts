import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - (100vw - 1280px) / 2)',
  marginLeft: 'auto',
  minHeight: 656,
});

export const Product = styled('div', {
  background: 'linear-gradient(10deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  a: {
    cursor: 'pointer',

    img: {
      objectFit: 'cover'
    }
  },

  footer: {
    position: 'absolute',
    bottom: '0.5rem',
    right: '0.5rem',
    left: '0.5rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    transform: 'translateY(110%)',
    opacity: 0,
    transition: '0.2s all ease-in-out',

    a: {
      fontSize: '$lg',
      textDecoration: 'none',
      color: '$gray100',

      '&:hover': {
        color: '$gray300',
      }
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    },
  },

  '@media(max-width: 768px)': {
    height: 500,
  }
})