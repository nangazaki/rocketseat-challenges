import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: #00000075;
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      margin-top: 1.5rem;

      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme["green-700"]};
        transition: backgound-color 0.2s;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;

  cursor: pointer;
  line-height: 0;
  background: transparent;
  border: 0;
  color: ${(props) => props.theme["gray-500"]};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButton {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButton>`
  height: 58px;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme["gray-700"]};
  color: ${(props) => props.theme["gray-300"]};
  padding: 0 1.25rem;
  line-height: 0;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-300"]};
  }

  &[data-state="unchecked"]:hover {
    background: ${(props) => props.theme["gray-600"]};
    transition: backgorund-color 0.2s;
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === "income"
        ? props.theme["green-500"]
        : props.theme["red-500"]};
    transition: backgorund-color 0.2s, color 0.2s;

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;
