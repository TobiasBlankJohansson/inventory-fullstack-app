type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: Type;
};

type Type = "button" | "reset" | "submit";

export const Button = ({
  onClick,
  children,
  disabled,
  className,
  type,
}: Props) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
