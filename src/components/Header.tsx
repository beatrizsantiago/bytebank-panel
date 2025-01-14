import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CloseOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from '@bytebank/styleguide';
import { useDispatch, useSelector } from "react-redux";

import { setUser } from '../feature/user/slice';
import { RootState } from '../app/store';
import useApi from "../services/useApi";
import NavigationMenu from './NavigationMenu';
import toast from '../utils/toast';

const Header = () => {
  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const userId = useSelector<RootState, string>((state) => state.account.userId);
  const userName = useSelector<RootState, string>((state) => state.user.username);

  const [openNavigationMenu, setOpenNavigationMenu] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const toggleNavigationMenu = () => {
    setOpenUserMenu(false);
    setOpenNavigationMenu((current) => !current);
  };

  const toggleUserMenu = () => {
    setOpenNavigationMenu(false);
    setOpenUserMenu((current) => !current);
  };

  const logout = () => {
    localStorage.removeItem('@auth');
    navigate('/', { replace: true });
  };

  const getUser = async () => {
    const response = await useApi({
      url: 'user',
      options: {
        method: 'GET',
      },
    });

    const data = await response.json();

    if (data?.result) {
      const user = data?.result?.find((user) => user.id === userId);
      dispatch(setUser({
        id: user?.id,
        username: user?.username,
        email: user?.email,
      }));
    } else {
      toast({ text: 'Erro ao buscar usuário, realize novamente o login!', type: 'ERROR' });
    }
  };

  useEffect(() => {
    if (userId) {
      getUser();
    }
  }, [userId])

  return (
    <div className="w-full h-24">
      <nav className="fixed top-0 w-full h-24 p-5 bg-primary-main flex justify-center items-center z-50">
        <div className="w-full max-w-[1200px] flex items-center justify-between md:justify-end">
          <div className="block md:hidden">
            <MenuOutlined className="text-secondary-main font-semibold text-xl" onClick={toggleNavigationMenu} />

            {openNavigationMenu && (
              <div className="absolute bg-secondary-light p-3 left-0 top-0">
                <div className="flex justify-end">
                  <CloseOutlined className="text-secondary-main text-lg" onClick={toggleNavigationMenu} />
                </div>
                <NavigationMenu />
              </div>
            )}
          </div>

          <div className="relative flex items-center">
            <p className="text-white font-semibold text-sm mr-4 md:mr-8">{userName || 'Usuário'}</p>
            <div className="w-10 h-10 border-2 border-secondary-main rounded-3xl flex items-center justify-center">
              <UserOutlined className="text-secondary-main text-2xl font-light cursor-pointer" onClick={toggleUserMenu} />

              {openUserMenu && (
                <div className="absolute bg-black p-3 right-0 top-14">
                  <div className="flex justify-end">
                    <CloseOutlined className="text-secondary-main text-lg" onClick={toggleUserMenu} />
                  </div>
                  <Menu
                    activeIndex={0}
                    items={[
                      { title: 'Minha conta', onClick: () => navigate('/painel/perfil') },
                      { title: 'Sair', onClick: () => logout() },
                    ]}
                    isWhite
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
