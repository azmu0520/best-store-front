import React, { createContext, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  Container,
  Icon,
  Search,
  Wrap,
  Controllers,
  Profile,
  Btn,
} from './style';
import logo from '../../assets/images/logo.png';
import flag_en from '../../assets/images/flag-en.png';
import flag_ru from '../../assets/images/flag-ru.png';
import user from '../../assets/images/user.jpg';
import { Modal, Dropdown } from 'antd';
import { useThemeContext } from '../../context/Theme';

const items = [
  {
    label: <NavLink to='/drive'>My Drive</NavLink>,
    key: '0',
  },
  {
    label: <NavLink to='/upload'>Upload</NavLink>,
    key: '1',
  },
  {
    label: <NavLink to='/account/settings'>Account Settings</NavLink>,
    key: '3',
  },
  {
    type: 'divider',
  },
  {
    label: <NavLink to='/logout'>Logout</NavLink>,
    key: '4',
  },
];

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, dispatch] = useThemeContext();
  return (
    <>
      <Container>
        <Wrap>
          <Wrap.Images>
            <Icon.Logo1 onClick={() => dispatch({ type: 'setDark' })} />
            <Icon.Logo2 onClick={() => dispatch({ type: 'setLight' })} />
          </Wrap.Images>
          <Search>
            <Search.Input
              className='search_input'
              placeholder='Start Searching...'
            />
            <Search.Btn type='submit'>
              <Icon.Search />
            </Search.Btn>
          </Search>
          <Controllers>
            <Btn>Log in</Btn>
            <Btn onClick={() => setIsModalOpen(true)}>
              <Icon.Lang />
            </Btn>
            <Modal
              title='Choose Language'
              open={isModalOpen}
              onCancel={() => setIsModalOpen(false)}
              footer={null}
              width={360}
              bodyStyle={{ borderRadius: '18px' }}
              centered
            >
              <Wrap.Language>
                <Wrap.LangImage src={flag_en} /> English
              </Wrap.Language>
              <Wrap.Language>
                <Wrap.LangImage src={flag_ru} /> Russion
              </Wrap.Language>
            </Modal>
            <Profile className='btn-margin'>
              <Profile.User className='btn-user'>
                <Profile.Image src={user} /> Azizbek
              </Profile.User>
              <Profile.Modal className='btn-user'>
                <Dropdown
                  menu={{ items, selectable: true }}
                  trigger={['click']}
                  className='dropper'
                >
                  <Icon.Arrow />
                </Dropdown>
              </Profile.Modal>
            </Profile>
          </Controllers>
        </Wrap>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
