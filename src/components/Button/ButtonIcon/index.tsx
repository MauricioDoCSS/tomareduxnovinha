import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
};

export const ButtonIcon = ({ icon, ...props }: Props) => {
  return (
    <button {...props} className="button-action">
      {icon}
    </button>
  );
};
