import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import Modal from '..';
import PAGES_ROUTE from '../../../utils/pagesRoute';

const InformationContainer = styled.div`
  position: relative;
  padding: 32px;
  width: 590px;
  height: auto;
  background-color: #fff;

  & h1 {
    font-size: 1.5rem;
    line-height: 36px;
    margin-bottom: 24px;
  }

  & .closeModal {
    position: absolute;
    right: 29px;
    top: 29px;

    cursor: pointer;
  }
`;

export default function ModalInformation({
  children,
  setIsOpenModal,
  isOpenModal,
}) {
  const history = useHistory();

  function handleCloseModal() {
    setIsOpenModal(false);
    history.push(PAGES_ROUTE.home);
  }

  return (
    <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
      <InformationContainer>
        <span role="presentation" onClick={handleCloseModal} className="closeModal">
          <MdClose size={24} />
        </span>

        {children}
      </InformationContainer>
    </Modal>
  );
}

ModalInformation.propTypes = {
  children: PropTypes.node.isRequired,
  isOpenModal: PropTypes.bool.isRequired,
  setIsOpenModal: PropTypes.func.isRequired,
};
