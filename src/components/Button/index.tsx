import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  styleType?: 'filled' | 'light' | 'outline' | 'subtle';
};

export const Button = ({ label, styleType = 'filled', ...props }: Props) => {
  return (
    <button {...props} className={`button ${styleType}`}>
      {label}
    </button>
  );
};
