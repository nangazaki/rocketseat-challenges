import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useFetch } from "../lib/axios";

export interface CreateNewTransaction {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
  createdAt: string;
}

interface Transactions {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionsContexType {
  transactions: Transactions[];
  fetchTransactions: (query?: string) => Promise<void>;
  postTransactions: (data: CreateNewTransaction) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionsContexType);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransaction] = useState<Transactions[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const { data } = await useFetch.get<Transactions[]>("/transactions", {
      params: {
        _sort: "-createdAt",
        q: query,
      },
    });

    setTransaction(data);
  }, []);

  const postTransactions = useCallback(async (data: CreateNewTransaction) => {
    const { data: transaction } = await useFetch.post<Transactions>(
      "/transactions",
      data
    );

    setTransaction((state) => [transaction, ...state]);
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, postTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
