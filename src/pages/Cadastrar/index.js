import { useState } from "react";
import FormNaverProfile from "../../components/FormNaverProfile";
import Header from "../../components/Header";
import ModalInformation from "../../components/Modal/Information";

export default function Cadastrar() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataProfile, setDataProfile] = useState({
    job_role: "",
    admission_date: "",
    birthdate: "",
    project: "",
    name: "",
    url: "",
  });

  function handleInput(e) {
    setDataProfile({
      ...dataProfile,
      [e.target.name]: e.target.value,
    });
  }

  function saveClick(e) {
    e.preventDefault();
    setIsOpenModal(true);
  }

  return (
    <>
      <Header />
      <FormNaverProfile
        title="Adicionar Naver"
        dataInput={dataProfile}
        onChange={handleInput}
        onClickSave={saveClick}
      />

      <ModalInformation
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      >
        <h1>Naver criado</h1>
        <p>Naver criado com sucesso</p>
      </ModalInformation>
    </>
  );
}
