"use client";
import { UserData } from "@/types/types";
import { ReactNode, createContext, useContext, useState } from "react";

interface ContextProps {
  users: UserData[];
  setUsers: React.Dispatch<React.SetStateAction<UserData[]>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const globalContext = createContext<ContextProps | undefined>({
  users: [],
  setUsers: () => {},

  loading: false,
  setLoading: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<UserData[] | []>([]);
  return (
    <globalContext.Provider value={{ users, setUsers, loading, setLoading }}>
      {children}
    </globalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(globalContext);
