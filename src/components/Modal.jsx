import { useGlobalContext } from '../context';
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={isModalOpen ? 'modal show-modal' : 'modal'}>
      <section className='modal-content'>
        <h3>Modal Content</h3>
        <button className='close-modal' onClick={closeModal}>
          <FaTimes />
        </button>
      </section>
    </div>
  );
};

export default Modal;
