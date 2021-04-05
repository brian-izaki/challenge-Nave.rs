import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CustomLink from "../../components/CustomLink";
import Header from "../../components/Header";
import ModalInformation from "../../components/Modal/Information";
import ModalProfile from "../../components/Modal/Profile";

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
    flex-direction: row;
    gap: 30px;
  }
`;

export default function Home() {
  const [isOpenModalInfo, setIsOpenModalInfo] = useState(false);
  const [isOpenModalProfile, setIsOpenModalProfile] = useState(true);

  const testeProfile = {
    name: "Brian Izaki",
    birthdate: "25/01/2000",
    admission_date: "01/03/2021",
    office: "Desenvolvedor front end",
    projects: "Desafio de Front-end",
  };

  return (
    <>
      <HomeContainer>
        <Header />
        <main>
          <div className="main-header">
            <h1>Navers</h1>
            <div />
            <Button.Dark>
              <CustomLink to="/cadastrar">
                Adicionar Naver
              </CustomLink>
            </Button.Dark>
          </div>

          <div className="card-list">
            <Card
              srcImage="https://avatars.githubusercontent.com/u/42379617?v=4"
              name="Brian Izaki"
              office="Desenvolvedor front-end & desenvolvedor backend"
              deleteClick={() => {
                console.log("deleteou");
              }}
              editClick={() => {
                console.log("editou");
              }}
            />
          </div>
        </main>
      </HomeContainer>

      <ModalInformation
        isOpenModal={isOpenModalInfo}
        setIsOpenModal={setIsOpenModalInfo}
      >
        <h1>Ola teste</h1>
        <p>Cadastrado </p>
      </ModalInformation>

      <ModalProfile
        isOpenModal={isOpenModalProfile}
        setIsOpenModal={setIsOpenModalProfile}
        profileData={testeProfile}
      />
    </>
  );
}
