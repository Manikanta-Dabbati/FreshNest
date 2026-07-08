import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "outline";
};

function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "px-8 py-4 rounded-2xl font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-green-700 text-white hover:bg-green-800 shadow-lg hover:scale-105",

    outline:
      "border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default Button;