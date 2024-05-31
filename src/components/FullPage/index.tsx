type Props = {
  children: React.ReactNode;
};
export const FullPage = ({ children }: Props) => {
  return <div className="full-page">{children}</div>;
};
