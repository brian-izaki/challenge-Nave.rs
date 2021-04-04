import styled from "styled-components";
import PropTypes from "prop-types";
import { MdClose, MdDelete, MdEdit } from "react-icons/md";
import Modal from "..";
import Button from "../../Button";

const ProfileContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  height: 503px;
  width: 1006px;
  background-color: ${(props) => props.theme.backgroundColor};

  & .closeModal {
    position: absolute;
    right: 24px;
    top: 24px;
    cursor: pointer;
  }

  & .photo {
  }

  & .profile-info {
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;

    & dl {
      dt {
        font-weight: 600;
        margin-bottom: 10px;
      }

      dd {
        margin-bottom: 24px;
      }
    }

  }
`;

export default function ModalProfile({ setIsOpenModal, isOpenModal, profileData }) {
  function handleCloseModal() {
    setIsOpenModal(false);
  }

  return (
    <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
      <ProfileContainer>
        <span onClick={handleCloseModal} className="closeModal">
          <MdClose size="1.5rem" />
        </span>

        <div className="photo">
          <img
            src="https://avatars.githubusercontent.com/u/42379617?v=4"
            alt="imagem de perfil"
          />
        </div>

        <div className="profile-info">
          <dl>
            <dt>
              <h2> {profileData.name} </h2>
            </dt>
            <dd> {profileData.office} </dd>

            <dt>Idade</dt>
            {/* Realizar canculo de tempo aqui */}
            <dd> 21 </dd>

            {/* Realizar canculo de tempo aqui */}
            <dt>Tempo de empresa</dt>
            <dd> 1 </dd>

            <dt>Projetos que participou</dt>
            <dd> {profileData.projects} </dd>
          </dl>
          <div>
            <Button.Icon onClick={() => console.log('modal profile delete')}>
              {" "}
              <MdDelete size="1.5rem" />{" "}
            </Button.Icon>
            <Button.Icon onClick={() => console.log('modal profile edit')}>
              {" "}
              <MdEdit size="1.5rem" />{" "}
            </Button.Icon>
          </div>
        </div>
      </ProfileContainer>
    </Modal>
  );
}

Modal.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  setIsOpenModal: PropTypes.func.isRequired,
  profileData: PropTypes.shape({
    name: PropTypes.string,
    birthdate: PropTypes.string,
    admission_date: PropTypes.string,
    office: PropTypes.string,
    projects: PropTypes.string,
  }),
};
