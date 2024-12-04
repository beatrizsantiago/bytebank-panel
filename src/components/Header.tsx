import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CloseOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from '@bytebank/styleguide';

import NavigationMenu from './NavigationMenu';

const Header = () => {
  const navigate = useNavigate();

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
    console.log('Logout');
  };

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
            <p className="text-white font-semibold text-sm mr-4 md:mr-8">Bia</p>
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
                      { title: 'Minha conta', onClick: () => navigate('/perfil') },
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
