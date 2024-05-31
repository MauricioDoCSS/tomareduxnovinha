import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

export type Breadcrumb = {
  label: string;
  disabled?: boolean;
  url?: string;
};

type Props = {
  items: Breadcrumb[];
};

export const Breadcrumb = ({ items }: Props) => {
  return (
    <div className="breadcrumb">
      <Link to="/">
        <MdHome />
      </Link>
      {items.map(({ label, disabled, url }) => (
        <Link key={url} to={url || ''}>
          {label}
        </Link>
      ))}
    </div>
  );
};
