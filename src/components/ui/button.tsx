import { cn } from "../../utils/common";

const variants: Record<any, string> = {
  primary: "bg-linear-to-r from-[#8176AF] to-[#C0B7E8] rounded-full text-xs font-bold",
  secondary:"border-2 border-white rounded-full text-white font-bold text-xs"
};

const sizes: Record<any, string> = {
  sm: "py-4 px-6.5",
  md:"py-4 px-7",
  lg:" py-4 px-9"
};

interface MyButtonProps {
  children: string | number;
  disabled?: boolean;
  className?: string | number;
  type?: "submit" | "reset" | "button" | undefined;
  variant?: string | number;
    size?: string | number;

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
      className={cn(className, size && sizes[size],  variant && variants[variant])}
    >
      {children}
    </button>
  );
}
