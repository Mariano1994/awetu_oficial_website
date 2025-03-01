import { createContext, useContext, useState } from "react";

interface MenuToggleContext {
  isOpen: boolean;
  handleToggleMenu: () => void;
}

interface MenuToggleProviderProps {
  children: React.ReactNode;
}

export const menuToggleContext = createContext<MenuToggleContext>({
  isOpen: false,
  handleToggleMenu: () => {},
});

export function MenuToggleProvider({ children }: MenuToggleProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMenu = () => {
    console.log("Button Clicked");
    setIsOpen((open) => !open);
  };
  return (
    <menuToggleContext.Provider value={{ isOpen, handleToggleMenu }}>
      {children}
    </menuToggleContext.Provider>
  );
}

export function useMenuToggle() {
  const context = useContext(menuToggleContext);
  if (context === undefined) {
    throw new Error("useMenuToggle must be used within a MenuToggleProvider");
  }
  return context;
}
