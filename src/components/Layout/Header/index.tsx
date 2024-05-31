import { MdLogout } from 'react-icons/md';
import { ButtonIcon } from '../../Button/ButtonIcon';
import { BoxHeader } from './BoxHeader';
import { TitleHeader } from './TitleHeader';

type Props = {
  label: string;
};

export const Header = ({ label }: Props) => {
  return (
    <BoxHeader>
      <header className="header">
        <TitleHeader label={label} />

        <div>
          <ButtonIcon icon={<MdLogout />} />
        </div>
      </header>
    </BoxHeader>
  );
};
