"use client";
import { ReactSelectTypes } from "@/components/ReactSelectInput";
import { LIMIT } from "@/lib/utils";
import { UserData } from "@/types/types";
import { ReactNode, createContext, useContext, useState } from "react";

export interface ContextProps {
  users: UserData[];
  setUsers: React.Dispatch<React.SetStateAction<UserData[]>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  params: AppState;
  setParams: React.Dispatch<React.SetStateAction<AppState>>;

  lengthUsers: number;
  setLengthUsers: React.Dispatch<React.SetStateAction<number>>;

  endOffset: number;
  setEndOffset: React.Dispatch<React.SetStateAction<number>>;
}

interface AppState {
  errors: number;
  seeds: number;
  region: ReactSelectTypes;
  page: number;

  lengthUsers?: number;
  setLengthUsers?: React.Dispatch<React.SetStateAction<number>>;

  endOffset?: number;
  setEndOffset?: React.Dispatch<React.SetStateAction<number>>;
}

const globalContext = createContext<ContextProps | undefined>({
  users: [],
  setUsers: () => {},

  loading: false,
  setLoading: () => {},

  lengthUsers: 20,
  setLengthUsers: () => {},

  endOffset: 20,
  setEndOffset: () => {},

  params: {
    errors: 0,
    seeds: 0,
    region: {
      value: "en_US",
      label: "English (United States)",
    },

    page: 1,
  },
  setParams: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [lengthUsers, setLengthUsers] = useState<number>(20);
  const [users, setUsers] = useState<UserData[] | []>([]);
  const [endOffset, setEndOffset] = useState<number>(LIMIT);

  const [params, setParams] = useState<AppState>({
    errors: 0,
    seeds: 0,
    region: {
      value: "en_US",
      label: "English (United States)",
    },
    page: 1,
  });

  return (
    <globalContext.Provider
      value={{
        users,
        setUsers,
        loading,
        setLoading,
        params,
        setParams,
        lengthUsers,
        setLengthUsers,
        endOffset,
        setEndOffset,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(globalContext);
