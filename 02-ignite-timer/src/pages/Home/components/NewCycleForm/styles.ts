import styled from 'styled-components'

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
