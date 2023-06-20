import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 2.5rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      color: ${(props) => props.theme['gray-100']};

      transition: color 0.2s ease-in-out, border 0.2s ease;

      &:hover {
        color: ${(props) => props.theme['green-500']};
        border-bottom-color: ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
