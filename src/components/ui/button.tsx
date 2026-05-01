interface MyButtonProps {
  children: string | number;
  disabled: boolean;
  className: string | number;
  type: "submit" | "reset" | "button" | undefined;
}

export function Button({
  children,
  type = "submit",
  disabled,
  className = " ",
  ...props
}: MyButtonProps) {
  <button
    {...props}
    type={type}
    disabled={disabled}
    className={` ${className}`}
  >
    {children}
  </button>;
}
