import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { MdClose, MdDelete, MdEdit } from 'react-icons/md';
import Modal from '..';
import Button from '../../Button';
import CustomLink from '../../CustomLink';
import { monthsToday, yearsToday } from '../../../utils/handleDate';

const keyframeModal = keyframes`
  0% {
    margin-top: 500px;
  }

  80% {
    margin-top: 0px;
  }

  90% {
    margin-top: 10px;
  }

  100% {
    margin-top: 0px;
  }
`;

const ProfileContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  height: 500px;
  width: auto;
  margin: 0 40px;
  background-color: ${(props) => props.theme.backgroundColor};

  animation: ${keyframeModal} 1s forwards;

  & .closeModal {
    position: absolute;
    right: 24px;
    top: 24px;
    cursor: pointer;
    z-index: ${(props) => props.theme.zIndex.maxLevel};
  }

  & .photo {
    height: 100%;

    & > img {
      filter: grayscale(100%);
      height: 100%;
    }
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

  @media (max-width: ${(props) => props.theme.breakpoint.tablet}px) {
    grid-template-columns: 1fr;
    & .closeModal {
      color: white;
    }

    & .photo {
      height: 250px;
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

  const timeAtWorkMonth = monthsToday(profileData.admission_date) || '';
  const timeAtWorkYear = yearsToday(profileData.admission_date) || '';

  return (
    <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
      <ProfileContainer>
        <span
          role="presentation"
          onClick={handleCloseModal}
          className="closeModal"
        >
          <MdClose size={24} />
        </span>

        <div className="photo">
          <img src={profileData.url} alt="imagem de perfil" />
        </div>

        <div className="profile-info">
          <dl>
            <dt>
              <h2>
                {profileData.name}
              </h2>
            </dt>
            <dd>
              {profileData.job_role}
            </dd>

            <dt>Idade</dt>
            <dd>
              {`${yearsToday(profileData.birthdate)} anos`}
            </dd>

            <dt>Tempo de empresa</dt>
            <dd>
              {timeAtWorkYear && `${timeAtWorkYear} anos `}
              {timeAtWorkMonth && `${timeAtWorkMonth} meses`}
              {!timeAtWorkYear && !timeAtWorkMonth && 'ainda não completou 1 mês'}
            </dd>

            <dt>Projetos que participou</dt>
            <dd>
              {profileData.project}
            </dd>
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

ModalProfile.propTypes = {
  profileData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    birthdate: PropTypes.string,
    admission_date: PropTypes.string,
    job_role: PropTypes.string,
    project: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  isOpenModal: PropTypes.bool.isRequired,
  setIsOpenModal: PropTypes.func.isRequired,
  deleteClick: PropTypes.func.isRequired,
  editPage: PropTypes.string.isRequired,
};
