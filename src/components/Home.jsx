import { useGlobalContext } from '../context';
import { FaBars } from 'react-icons/fa';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className='toggle-sidebar' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn modal-btn' onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
