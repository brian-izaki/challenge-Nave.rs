import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CustomLink from "../../components/CustomLink";
import Header from "../../components/Header";
import ModalInformation from "../../components/Modal/Information";
import ModalProfile from "../../components/Modal/Profile";
import { findAllNavers, findOneNaver, deleteNaver } from "../../services/navers";
import { PAGES_ROUTE } from "../../utils/pagesRoute";

const HomeContainer = styled.div`
  & main {
    & .main-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 32px;

      h1 {
        font-size: 2.5rem;
        font-weight: 600;
      }
    }
  }

  & .card-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: 30px;
  }

  @media(max-width: ${props => props.theme.breakpoint.tablet}px){
    & .card-list {
      justify-content: space-around;
    }
  }

  @media(max-width: ${props => props.theme.breakpoint.mobile}px){
    & .main-header {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  margin-top: 30px;
`;

export default function Home() {
  const [listNavers, setListNavers] = useState([]);
  const [profileSelected, setProfileSelected] = useState({});
  const [hasOpenModalDelete, setHasOpenModalDelete] = useState(false);
  const [hasOpenModalDeleteMsg, setHasOpenModalDeleteMsg] = useState(false);
  const [hasOpenModalProfile, setHasOpenModalProfile] = useState(false);

  async function showModalProfile(id) {
    const naver = await findOneNaver(id);
    setProfileSelected(naver);
    setHasOpenModalProfile(true);
  }

  function showModalDeleteProfile(profile) {
    setProfileSelected(profile);
    setHasOpenModalDelete(true);
  }

  function closeModalDeleteProfile() {
    setHasOpenModalDelete(false);
  }

  function handleDeleteProfile(id) {
    console.log("Deletou este perfil no banco de dados", id);

    deleteNaver(id)
    closeModalDeleteProfile();
    setHasOpenModalProfile(false);
    setHasOpenModalDeleteMsg(true);
  }

  useEffect(() => {
    async function list() {
      setListNavers(await findAllNavers());
    }
    list();
  }, [hasOpenModalDeleteMsg]);

  return (
    <>
      <HomeContainer>
        <Header />
        <main>
          <div className="main-header">
            <h1>Navers</h1>
            <div />
            <Button.Dark>
              <CustomLink to="/cadastrar">Adicionar Naver</CustomLink>
            </Button.Dark>
          </div>

          <div className="card-list">
            {listNavers.map((profileItem) => (
              <Card
                key={profileItem.id}
                profileData={profileItem}
                editPage={`${PAGES_ROUTE.alterar}/${profileItem.id}`}
                showModalDeleteProfile={() => showModalDeleteProfile(profileItem)}
                showModalProfile={() => showModalProfile(profileItem.id)}
              />
            ))}
          </div>
        </main>

        <ModalProfile
          isOpenModal={hasOpenModalProfile}
          setIsOpenModal={setHasOpenModalProfile}
          profileData={profileSelected}
          editPage={`${PAGES_ROUTE.alterar}/${profileSelected.id}`}
          deleteClick={() => showModalDeleteProfile(profileSelected)}
        />

        <ModalInformation
          isOpenModal={hasOpenModalDelete}
          setIsOpenModal={setHasOpenModalDelete}
        >
          <h1>Deseja deletar?</h1>
          <p>Tem certeza que deseja excluir este Naver?</p>
          <ButtonContainer>
            <Button.Light onClick={closeModalDeleteProfile}>
              Cancelar
            </Button.Light>
            <Button.Dark
              onClick={() => handleDeleteProfile(profileSelected.id)}
            >
              Excluir
            </Button.Dark>
          </ButtonContainer>
        </ModalInformation>

        <ModalInformation
          isOpenModal={hasOpenModalDeleteMsg}
          setIsOpenModal={setHasOpenModalDeleteMsg}
        >
          <h1>Naver excluído</h1>
          <p>Naver excluído com sucesso!</p>
        </ModalInformation>
      </HomeContainer>
    </>
  );
}
