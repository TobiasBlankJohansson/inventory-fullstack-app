type Props = {
  children?: React.ReactNode;
};

export const ScreenContainer = ({ children }: Props) => {
  return <div className="h-screen flex flex-col">{children}</div>;
};
