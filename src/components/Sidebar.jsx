import { useGlobalContext } from '../context';
import logo from '../logo.svg';
import { FaTimes } from 'react-icons/fa';
import { links, social } from '../data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={!isSidebarOpen ? 'sidebar' : 'sidebar show-sidebar'}>
      <header className='header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='close-sidebar' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </header>

      <ul className='side-links'>
        {links.map((item) => {
          return (
            <li className='side-link' key={item.id}>
              <a href={item.url}>
                <span className='li-icon'>{item.icon}</span>
                <p className='link-text'>{item.text}</p>
              </a>
            </li>
          );
        })}
      </ul>

      <footer className='footer'>
        <ul className='social-icons'>
          {social.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url}>{item.icon}</a>
              </li>
            );
          })}
        </ul>
      </footer>
    </aside>
  );
};

export default Sidebar;
