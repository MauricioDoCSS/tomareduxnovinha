type Props = {
  label: string;
};
export const TitleHeader = ({ label }: Props) => {
  return <span className="title-header">{label}</span>;
};
