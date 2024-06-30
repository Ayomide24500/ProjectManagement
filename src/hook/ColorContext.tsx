import { createContext, useState, useEffect, FC } from "react";

interface iChildren {
  children: React.ReactNode;
}

const ColorContext = createContext({
  shadowColor: "yellow",
  buttonColor: "black",
});

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const ColorProvider: FC<iChildren> = ({ children }) => {
  const [shadowColor, setShadowColor] = useState(generateRandomColor());
  const [buttonColor, setButtonColor] = useState(generateRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setShadowColor(generateRandomColor());
      setButtonColor(generateRandomColor());
    }, 60000); // change colors every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <ColorContext.Provider value={{ shadowColor, buttonColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
