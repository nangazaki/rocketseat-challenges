import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../context/TransactionsContext";
import { useContext } from "react";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransationForm = z.infer<typeof newTransactionFormSchema>;

type NewTransactionModalProps = {
  onClose: () => void;
};

export function NewTransactionModal({ onClose }: NewTransactionModalProps) {
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransationForm>({
    resolver: zodResolver(newTransactionFormSchema),
  });

  const { postTransactions } = useContext(TransactionsContext);

  async function handleCreateNewTransaction(data: NewTransationForm) {
    await postTransactions({
      ...data,
      createdAt: String(new Date()),
    });

    reset();
    onClose();
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            {...register("description")}
            type="text"
            placeholder="Descrição"
            required
          />
          <input
            {...register("price", { valueAsNumber: true })}
            type="number"
            placeholder="Preço"
            required
          />
          <input
            {...register("category")}
            type="text"
            placeholder="Categoria"
            required
          />

          <Controller
            name="type"
            control={control}
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} /> Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} /> Saída
                  </TransactionTypeButton>
                </TransactionType>
              );
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
