import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CustomLink from "../../components/CustomLink";
import Header from "../../components/Header";
import { findAllNavers } from "../../services/navers";
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
    flex-direction: row;
    gap: 30px;
  }
`;

export default function Home() {
  const [listNavers, setListNavers] = useState([]);

  useEffect(() => {
    async function list() {
      setListNavers(await findAllNavers());
    }
    list();
  }, []);

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
            {listNavers.map((item) => (
              <Card
                key={item.id}
                profileData={item}
                editPage={PAGES_ROUTE.alterar}
              />
            ))}
          </div>
        </main>
      </HomeContainer>
    </>
  );
}
