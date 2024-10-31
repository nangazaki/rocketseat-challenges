import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

const ButtonBase = styled.button`
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background 0.2 ease;

  font-size: 1rem;
  font-weight: bold;
  line-height: 1.6;
  color: ${(props) => props.theme['gray-100']};

  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const ButtonStartCountdown = styled(ButtonBase)`
  background: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-800']};
  }
`

export const ButtonStopCountdown = styled(ButtonBase)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
