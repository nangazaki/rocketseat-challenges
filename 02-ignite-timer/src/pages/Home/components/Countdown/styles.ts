import styled from 'styled-components'

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
