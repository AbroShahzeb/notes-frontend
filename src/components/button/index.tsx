import * as React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  preIcon?: React.ReactNode | null;
  postIcon?: React.ReactNode | null;
  variant?: "primary" | "secondary" | "outlined" | "destructive";
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      label = "Label",
      className = "",
      preIcon,
      postIcon,
      type = "button",
      variant = "primary",
      ...props
    },
    ref
  ) => {
    const variants = {
      primary: "bg-blue-500 text-white hover:bg-primary-600",
      destructive: "bg-red-500 text-white hover:bg-red-600",
      secondary:
        "bg-neutral-100 dark:bg-neutral-500 text-neutral-600 dark:text-neutral-100 hover:bg-transparent border border-transparent transition-all  hover:border-neutral-300 dark:hover:border-neutral-700 hover:text-primary-text",
      outlined:
        "hover:bg-neutral-100 text-neutral-600 bg-transparent border hover:border-transparent transition-all  border-neutral-300 hover:text-primary-text",
    };

    return (
      <button
        ref={ref}
        className={`${variants[variant]} ${className} py-3 px-4 rounded-lg flex text-preset-4 items-center justify-center gap-2 focus:outline-none hover:bg-blue-700 focus-within:ring-neutral-500 focus-within:ring-offset-2 focus-within:ring-offset-neutral-50 focus-within:ring-2 border-neutral-300 dark:focus-within:ring-neutral-700 dark:focus-within:ring-offset-neutral-950 dark:focus-within:border-neutral-600 disabled:bg-neutral-100 disabled:text-neutral-300`}
        type={type}
        {...props}
      >
        {preIcon}
        <span>{label}</span>
        {postIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
