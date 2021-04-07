import { useState } from "react";
import FormNaverProfile from "../../components/FormNaverProfile";
import Header from "../../components/Header";
import ModalInformation from "../../components/Modal/Information";

export default function Alterar() {
  const [dataProfile, setDataProfile] = useState({
    job_role: "",
    admission_date: "",
    birthdate: "",
    project: "",
    name: "",
    url: "",
  });
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleInput(e) {
    setDataProfile({
      ...dataProfile,
      [e.target.name]: e.target.value,
    });
  }

  function saveClick(e) {
    e.preventDefault();
    setIsOpenModal(true)
  }

  return (
    <>
      <Header />
      <FormNaverProfile
        title="Alterar Naver"
        dataInput={dataProfile}
        onChange={handleInput}
        onSubmit={saveClick}
      />

      <ModalInformation
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      >
        <h1>Naver alterado</h1>
        <p>Naver alterado com sucesso</p>
      </ModalInformation>
    </>
  );
}
