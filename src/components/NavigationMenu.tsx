import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from '@bytebank/styleguide';
import { toast } from 'react-toastify';

type Props = {
  inline?: boolean;
}

const activeIndex:{[key: string]:number} = {
  '/painel': 0,
  '/transferencias': 1,
  '/investimentos': 2,
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
        { title: 'Transferências', onClick: () => toast.warning('Página ainda não implementada!') },
        { title: 'Investimentos', onClick: () => toast.warning('Página ainda não implementada!') },
        { title: 'Outros serviços', onClick: () => toast.warning('Página ainda não implementada!') },
      ]}
      inline={inline}
    />
  );
};

export default NavigationMenu;
