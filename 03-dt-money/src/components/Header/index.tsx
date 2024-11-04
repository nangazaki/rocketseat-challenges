import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import * as Dialog from "@radix-ui/react-dialog";

import logoSvg from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSvg} alt="Logotipo" />

        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal onClose={handleCloseModal} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
