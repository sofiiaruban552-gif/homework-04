import { Moon, Sun } from "lucide-react";
import ButtonIcon from "./shared/ButtonIcon";
import { useThemeContext } from "../hooks/useThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

   const isLight = theme === "light";

  return (
    <ButtonIcon
      onClick={toggleTheme}
      icon={isLight ? <Moon size={20} /> : <Sun size={20} />}
    />
  );
};

export default ThemeToggle;
