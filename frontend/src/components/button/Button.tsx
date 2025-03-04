type Variant = "primary" | "secondary" | "info" | "warning" | "success";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  variant: Variant;
  className?: Variant;
  disabled?: boolean;
};

export const Button = ({
  onClick,
  children,
  variant,
  disabled,
  className,
}: Props) => {
  return (
    <button
      className={`btn ${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
