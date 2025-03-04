type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

export const Button = ({ onClick, children, disabled, className }: Props) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
