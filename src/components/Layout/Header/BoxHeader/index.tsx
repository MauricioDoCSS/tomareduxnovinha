type Props = {
  children: React.ReactNode;
};
export const BoxHeader = ({ children }: Props) => {
  return <div className="box-header">{children}</div>;
};
