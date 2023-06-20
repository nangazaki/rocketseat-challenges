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

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  line-height: 1.6;
  font-size: 1.125rem;
  font-weight: bold;
`

const BaseInput = styled.input`
  height: 2.5rem;
  padding: 0 0.5rem;
  font-size: 1.125rem;
  font-weight: bold;

  border: none;
  border-bottom: 2px solid ${(props) => props.theme['gray-600']};
  background: transparent;

  color: ${(props) => props.theme['gray-300']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const InputTask = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const InputAmountMinutes = styled(BaseInput)`
  width: 4.5rem;
`

export const CountdownContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;

  font-size: 10rem;
  line-height: 8rem;
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme['gray-100']};

  span {
    padding: 2rem 1rem;

    background: #29292e;
    border-radius: 8px;
  }

  span:nth-child(3) {
    display: block;
    color: ${(props) => props.theme['green-500']};

    width: 4rem;
    padding: 2rem 0;
    overflow: hidden;
    background: transparent;
    display: flex;
    justify-content: center;
  }
`

const ButtonBase = styled.button`
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-size: 1rem;
  font-weight: bold;
  line-height: 1.6;
  color: ${(props) => props.theme['gray-100']};

  border: none;
  border-radius: 8px;
  cursor: pointer;
`

export const ButtonStartCountdown = styled(ButtonBase)`
  background: ${(props) => props.theme['green-500']};
  transition: background 0.2 ease;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-800']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
