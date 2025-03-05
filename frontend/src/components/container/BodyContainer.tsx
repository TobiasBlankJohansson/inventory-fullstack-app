type Props = {
  children?: React.ReactNode;
};

export const BodyContainer = ({ children }: Props) => {
  return (
    <div className={"h-[calc(100vh-64px)] flex flex-col min-[768px]:mx-20"}>
      {children}
    </div>
  );
};
