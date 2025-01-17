import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from '@bytebank/styleguide';

import toast from '../utils/toast';

type Props = {
  inline?: boolean;
}

const activeIndex:{[key: string]:number} = {
  '/painel': 0,
  '/painel/analise-financeira': 1,
  '/transferencias': 2,
  '/outros': 3,
};

const NavigationMenu = ({ inline = false }:Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Menu
      activeIndex={activeIndex[pathname]}
      items={[
        { title: 'Início', onClick: () => navigate('/painel') },
        { title: 'Análises', onClick: () => navigate('/painel/analise-financeira') },
        { title: 'Transferências', onClick: () => toast({ text: 'Página ainda não implementada!', type: 'WARNING' }) },
        { title: 'Outros serviços', onClick: () => toast({ text: 'Página ainda não implementada!', type: 'WARNING' }) },
      ]}
      inline={inline}
    />
  );
};

export default NavigationMenu;
