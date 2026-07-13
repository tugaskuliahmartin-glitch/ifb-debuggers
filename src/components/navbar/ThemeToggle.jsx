import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggle}
      className="
      glass
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-xl
      hover:scale-105
      active:scale-95
      transition-all
      duration-300
      cursor-pointer
      "
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}