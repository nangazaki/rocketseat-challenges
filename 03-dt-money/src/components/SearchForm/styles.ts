import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 1rem;

  input {
    flex: 1;

    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 1rem;

    :placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    height: 50px;
    padding: 0 1.25rem;

    cursor: pointer;
    background: transparent;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme["green-300"]};
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    &:hover {
      background: ${(props) => props.theme["green-300"]};
      color: ${(props) => props.theme.white};
      transition: background 0.2s;
    }
  }
`;
