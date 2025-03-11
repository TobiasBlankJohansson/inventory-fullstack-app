type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: Type;
};

type Type = "button" | "reset" | "submit";

export const Button =
    ({
       onClick,
       children,
       disabled,
       className,
       type = "button",
     }: Props) => {
  return (
      <button
          type={type}
          className={`btn ${className}`}
          onClick={onClick}
          disabled={disabled}
      >
        {children}
      </button>
  );
};
