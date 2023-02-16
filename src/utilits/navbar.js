import Generic from '../components/Generic';
import Home from '../components/Home';
import Login from '../components/Login';

export const data = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    Component: Home,
    private: true,
  },
  {
    id: 2,
    title: 'Login',
    path: 'login',
    Component: Login,
    private: true,
  },
  {
    id: 3,
    title: 'Register',
    path: 'register',
    Component: Generic,
    private: true,
  },
  {
    id: 4,
    title: 'My Drive',
    path: 'drive',
    Component: Generic,
  },
  {
    id: 5,
    title: 'Upload',
    path: 'upload',
    Component: Generic,
  },
  {
    id: 6,
    title: 'Account Settings',
    path: 'account/settings',
    Component: Generic,
  },
];
