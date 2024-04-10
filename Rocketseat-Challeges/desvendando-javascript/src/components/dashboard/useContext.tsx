import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserData {
  id: number;
  createAt?: string;
  firstName: string;
  lastName: string;
  dateBirth: string;
  mediaSocial: string;
}

interface UserContextType {
  users: UserData[];
  addUser: (user: UserData) => void;
  deleteUser: (id: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    const dataUsers = localStorage.getItem('dataUser');
    if (dataUsers) {
      const parsedData = JSON.parse(dataUsers);
      setUsers(parsedData);
    }
  }, []);

  const addUser = (user: UserData) => {
    setUsers((prevUsers) => [...prevUsers, user]);
    localStorage.setItem('dataUser', JSON.stringify([...users, user]));
  };

  const deleteUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem('dataUser', JSON.stringify(updatedUsers));
  };

  const contextValue: UserContextType = {
    users,
    addUser,
    deleteUser,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
