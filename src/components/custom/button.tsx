import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

interface buttonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
}

const Button = forwardRef<HTMLButtonElement, buttonProps>(
  (
    {
      children,
      onClick,
      className = "",
      disabled,
      type = "button",
      variant,
      size,
    },
    ref
  ) => {
    const innerRef = useRef<HTMLButtonElement | null>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLButtonElement);

    const [animating, setAnimating] = useState(false);
    const pending = useRef<null | (() => void)>(null);

    const animateThen = (fn: () => void) => {
      if (disabled) return;
      if (animating) return;
      setAnimating(true);
      pending.current = fn;
      // animation duration should match CSS transition (150ms)
      window.setTimeout(() => {
        setAnimating(false);
        pending.current?.();
        pending.current = null;
      }, 150);
    };

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      animateThen(onClick);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        animateThen(onClick);
      }
    };

    return (
      <button
        ref={innerRef}
        className={`${className} ${variant || ""} ${
          size || ""
        } cursor-pointer ${
          variant === "secondary" ? "border bg-transparent" : ""
        } transform transition-transform duration-150 ${
          animating ? "scale-95" : "scale-100"
        }`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        type={type}
        aria-pressed={animating}
      >
        {children}
      </button>
    );
  }
);

export default Button;
