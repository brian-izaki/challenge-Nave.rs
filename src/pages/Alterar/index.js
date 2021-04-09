import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormNaverProfile from '../../components/FormNaverProfile';
import Header from '../../components/Header';
import ModalInformation from '../../components/Modal/Information';
import { findOneNaver, updateNaver } from '../../services/navers';
import { validDate } from '../../utils/handleDate';

export default function Alterar() {
  const { id } = useParams();
  const [dataProfile, setDataProfile] = useState({
    job_role: '',
    admission_date: '',
    birthdate: '',
    project: '',
    name: '',
    url: '',
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
    updateNaver(id, {
      ...dataProfile,
      admission_date: validDate(dataProfile.admission_date),
      birthdate: validDate(dataProfile.birthdate),
    });
    setIsOpenModal(true);
  }

  useEffect(() => {
    findOneNaver(id).then((response) => {
      const {
        job_role,
        admission_date,
        birthdate,
        project,
        name,
        url,
      } = response;
      setDataProfile({
        job_role,
        admission_date: validDate(admission_date, true),
        birthdate: validDate(birthdate, true),
        project,
        name,
        url,
      });
    });
  }, [id]);

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
