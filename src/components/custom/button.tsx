interface buttonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
}

export default function Button({
  children,
  onClick,
  className,
  disabled,
  type,
  variant,
  size,
}: buttonProps) {
  return (
    <button
      className={`${className} ${variant} ${size} ${
        variant === "secondary" ? "border bg-transparent" : ""
      } `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
