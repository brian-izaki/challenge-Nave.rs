import { useState } from "react";
import FormNaverProfile from "../../components/FormNaverProfile";
import Header from "../../components/Header";
import ModalInformation from "../../components/Modal/Information";

export default function Cadastrar() {
  const [isOpenModal, setIsOpenModal] = useState(true)

  return (
    <>
      <Header />
      <FormNaverProfile title="Adicionar Naver"/>
      <ModalInformation isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} >
        <h1>Naver criado</h1>
        <p>Naver criado com sucesso</p>
      </ModalInformation>
    </>
  )
}