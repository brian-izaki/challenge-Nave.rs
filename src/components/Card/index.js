import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../Button";
import CustomLink from "../CustomLink";
import ModalProfile from "../Modal/Profile";
import ModalInformation from "../Modal/Information";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;

  width: 25%;

  font-size: 1.2rem;

  & > div > img {
    filter: grayscale(100%);
    cursor: pointer;
  }

  & p:nth-child(2) {
    font-weight: 600;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  margin-top: 30px;
`;

export default function Card({ profileData, editPage }) {
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [isOpenModalDeleteConfirm, setIsOpenModalDeleteConfirm] = useState(false);
  const [isOpenModalProfile, setIsOpenModalProfile] = useState(false);
  
  const showModalProfile = () => setIsOpenModalProfile(true);
  const showModalDeleteProfile = () => setIsOpenModalDelete(true);
  const closeModalDeleteProfile = () => setIsOpenModalDelete(false);

  function handleDeleteProfile(){
    console.log('Deletou este perfil no banco de dados')
    closeModalDeleteProfile()
    setIsOpenModalDeleteConfirm(true)
  }

  return (
    <>
      <CardContainer>
        <div onClick={showModalProfile}>
          <img src={profileData.srcImage} alt="avatar user" />
        </div>

        <p>{profileData.name}</p>

        <p>{profileData.office}</p>

        <div>
          <Button.Icon onClick={showModalDeleteProfile}>
            <MdDelete size={24} />
          </Button.Icon>
          <Button.Icon>
            <CustomLink to={editPage}>
              <MdEdit size={24} />
            </CustomLink>
          </Button.Icon>
        </div>
      </CardContainer>

      <ModalProfile
        isOpenModal={isOpenModalProfile}
        setIsOpenModal={setIsOpenModalProfile}
        profileData={profileData}
        editPage="/alterar"
        deleteClick={showModalDeleteProfile}
      />

      <ModalInformation
        isOpenModal={isOpenModalDelete}
        setIsOpenModal={setIsOpenModalDelete}
        >
        <h1>Deseja deletar?</h1>
        <p>Tem certeza que deseja excluir este Naver?</p>
        <ButtonContainer>
          <Button.Light onClick={closeModalDeleteProfile}>
            Cancelar
          </Button.Light>
          <Button.Dark onClick={handleDeleteProfile}>
            Excluir
          </Button.Dark>
        </ButtonContainer>
      </ModalInformation>

      <ModalInformation
        isOpenModal={isOpenModalDeleteConfirm}
        setIsOpenModal={setIsOpenModalDeleteConfirm}
      >
        <h1>Naver excluído</h1>
        <p>Naver excluído com sucesso!</p>
      </ModalInformation>
    </>
  );
}

Card.propTypes = {
  profileData: PropTypes.shape({
    name: PropTypes.string,
    birthdate: PropTypes.string,
    admission_date: PropTypes.string,
    office: PropTypes.string,
    projects: PropTypes.string,
  }),
  editPage: PropTypes.string.isRequired,
};
