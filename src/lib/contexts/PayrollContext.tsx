'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PayrollContextType {
  activeTabId: string;
  activeTabTitle: string;
  setActiveTab: (id: string, title: string) => void;
}

const defaultContext: PayrollContextType = {
  activeTabId: 'all',
  activeTabTitle: 'All',
  setActiveTab: () => {},
};

const PayrollContext = createContext<PayrollContextType>(defaultContext);

export const usePayrollContext = () => useContext(PayrollContext);

interface PayrollProviderProps {
  children: ReactNode;
}

export const PayrollProvider: React.FC<PayrollProviderProps> = ({ children }) => {
  const [activeTabId, setActiveTabId] = useState('all');
  const [activeTabTitle, setActiveTabTitle] = useState('All');

  const setActiveTab = (id: string, title: string) => {
    setActiveTabId(id);
    setActiveTabTitle(title);
  };

  return (
    <PayrollContext.Provider
      value={{
        activeTabId,
        activeTabTitle,
        setActiveTab,
      }}
    >
      {children}
    </PayrollContext.Provider>
  );
};