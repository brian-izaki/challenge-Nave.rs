import PropTypes from "prop-types";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${(props) => props.theme.zIndex.mediumLevel};
`;

ModalContainer.PaperContainer = styled.div`
  z-index: ${(props) => props.theme.zIndex.maxLevel};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Modal({ children, isOpenModal, setIsOpenModal }) {

  function handleClickOutModal(e) {
    const isOutModal = e.target.dataset.outModal;
    if (isOutModal) {
      setIsOpenModal(false)
    }
  }

  return (
    <ModalContainer onClick={handleClickOutModal} isOpen={isOpenModal}>
      <ModalContainer.PaperContainer data-out-modal>

        {children}

      </ModalContainer.PaperContainer>
    </ModalContainer>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpenModal: PropTypes.bool.isRequired,
  setIsOpenModal: PropTypes.func.isRequired,
};
