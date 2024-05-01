import { Children, ReactNode, createContext, useEffect, useState } from "react";

interface Transactions {
  id: string;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionsContexType {
  transactions: Transactions[];
}

export const TransactionsContext = createContext({} as TransactionsContexType);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransaction] = useState<Transactions[]>([]);

  async function getTransactions() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();

    setTransaction(data);
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
