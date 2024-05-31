type Props = {
  label: string;
};
export const TitleDialog = ({ label }: Props) => {
  return <span className="title-dialog">{label}</span>;
};
