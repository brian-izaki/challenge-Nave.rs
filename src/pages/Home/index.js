import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CustomLink from "../../components/CustomLink";
import Header from "../../components/Header";

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
  // deletar os testes de profile
  const testeProfile = {
    name: "Brian Izaki 8738",
    birthdate: "25/01/2000",
    admission_date: "01/03/2021",
    office: "Desenvolvedor front end",
    projects: "Desafio de Front-end",
    srcImage: "https://avatars.githubusercontent.com/u/42379617"
  };

  const testeProfile2 = {
    name: "Zenebes",
    birthdate: "25/06/1999",
    admission_date: "01/03/2021",
    office: "UX designer",
    projects: "Desafio de UX design",
    srcImage: "https://static.escolakids.uol.com.br/2019/07/lontra.jpg"
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
            {/* Fazer um map na lista de navers que vier do back end */}
            <Card
              profileData={testeProfile}
              editPage="/alterar"
            />

            <Card
              profileData={testeProfile2}
              editPage="/alterar"
            />
          </div>
        </main>
      </HomeContainer>
    </>
  );
}
