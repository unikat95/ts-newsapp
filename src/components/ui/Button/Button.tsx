import React from "react";

import { buttonVariants } from "./ButtonVariants";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "light" | "dark" | "blue" | "red" | "green";
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement>) => void)
    | (() => void);
  to?: string;
  Icon?: IconType;
  disabled?: boolean;
  loading?: boolean;

  text?: string;
};

export default function Button({
  variant,
  onClick,
  to,
  disabled,
  loading,
  Icon,
  ...props
}: ButtonProps) {
  const className = buttonVariants({ variant });

  if (to) {
    return (
      <Link to={to} className={className}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button
        type="button"
        disabled={disabled}
        className={className}
        onClick={onClick}
        {...props}
      >
        {loading && <LoadingSpinner size={20} />}
        {props.text}
        {Icon && <Icon />}
      </button>
    );
  }
}
