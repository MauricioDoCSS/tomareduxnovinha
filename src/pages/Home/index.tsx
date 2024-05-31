import { useState } from 'react';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Dialog } from '../../components/Dialog';
import { Header } from '../../components/Layout/Header';

const items: Breadcrumb[] = [
  {
    label: 'Tribunal',
    disabled: true,
  },
];

export const Home = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div>
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        label="Encerrar Sessão"
        acceptLabel="Encerrar sessão"
        rejectLabel="Cancelar"
        description="Deseja encerrar sua sessão ? Será necessário fazer login novamente para acessar a aplicação"
        accept={() => alert('confirmou')}
      />

      <Header label="Início" />
      <br />
      <button onClick={() => setVisible(true)}>abrir dialog</button>
      <Breadcrumb items={items} />
    </div>
  );
};
