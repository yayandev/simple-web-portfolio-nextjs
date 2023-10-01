"use client";
import { createContext, useContext, useState } from "react";

export const SidebarContext = createContext({
  isOpen: true,

  setIsOpen: (isOpen: boolean) => {
    isOpen: isOpen;
  },
});

export const useSidebar = () => {
  return useContext(SidebarContext);
};

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen]: any = useState(true);
  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
