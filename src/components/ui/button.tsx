import { cn } from "../../utils/common";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary:
    "bg-linear-to-r from-[#8176AF] to-[#C0B7E8] rounded-full text-xs font-bold text-[#343045] hover:shadow-[0_0_28px_rgba(192,183,232,0.35)] hover:-translate-y-0.5",
  secondary:
    "border-2 border-white rounded-full text-white font-bold text-xs hover:bg-white hover:text-[#343045]",
};

const sizes = {
  sm: "py-4 px-6.5",
  md:"py-4 px-7",
  lg:" py-4 px-9"
};

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;

}

export function Button({
  children,
  type = "submit",
  disabled,
  className = " ",
  variant,
  size,
  ...props
}: MyButtonProps) {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      className={cn(
        "transition duration-300 disabled:cursor-not-allowed disabled:opacity-60",
        className,
        size && sizes[size],
        variant && variants[variant]
      )}
    >
      {children}
    </button>
  );
}
