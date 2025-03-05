import { createContext, useContext, useEffect, useState } from "react";

const ScreenContext = createContext<{ isLaptop: boolean }>({ isLaptop: false });

export function ScreenProvider({ children }: { children: React.ReactNode }) {
  const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsLaptop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenContext.Provider value={{ isLaptop }}>
      {children}
    </ScreenContext.Provider>
  );
}

export function useScreen() {
  return useContext(ScreenContext);
}
