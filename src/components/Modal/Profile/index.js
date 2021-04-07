import styled from "styled-components";
import PropTypes from "prop-types";
import { MdClose, MdDelete, MdEdit } from "react-icons/md";
import Modal from "..";
import Button from "../../Button";
import CustomLink from "../../CustomLink";
import yearsToday from "../../../utils/yearsToday";

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

export default function ModalProfile({
  profileData,
  setIsOpenModal,
  isOpenModal,
  deleteClick,
  editPage,
}) {
  function handleCloseModal() {
    setIsOpenModal(false);
  }

  return (
    <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
      <ProfileContainer>
        <span onClick={handleCloseModal} className="closeModal">
          <MdClose size={24} />
        </span>

        <div className="photo">
          <img
            src={profileData.url}
            alt="imagem de perfil"
          />
        </div>

        <div className="profile-info">
          <dl>
            <dt>
              <h2> {profileData.name} </h2>
            </dt>
            <dd> {profileData.job_role} </dd>

            <dt>Idade</dt>
            <dd> {yearsToday(profileData.birthdate)} </dd>

            <dt>Tempo de empresa</dt>
            <dd> {yearsToday(profileData.admission_date)} </dd>

            <dt>Projetos que participou</dt>
            <dd> {profileData.project} </dd>
          </dl>
          <div>
            <Button.Icon onClick={deleteClick}>
              <MdDelete size={24} />
            </Button.Icon>
            <Button.Icon>
              <CustomLink to={editPage}>
                <MdEdit size={24} />
              </CustomLink>
            </Button.Icon>
          </div>
        </div>
      </ProfileContainer>
    </Modal>
  );
}

Modal.propTypes = {
  profileData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    birthdate: PropTypes.string,
    admission_date: PropTypes.string,
    job_role: PropTypes.string,
    project: PropTypes.string,
  }),
  isOpenModal: PropTypes.bool.isRequired,
  setIsOpenModal: PropTypes.func.isRequired,
  deleteClick: PropTypes.func.isRequired,
  editPage: PropTypes.string.isRequired,
};
