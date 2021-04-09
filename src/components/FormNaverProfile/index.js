import styled from 'styled-components';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import PropTypes from 'prop-types';
import FormField from '../FormField';
import Button from '../Button';
import CustomLink from '../CustomLink';
import PAGES_ROUTE from '../../utils/pagesRoute';

const FormNaverProfileContainer = styled.section`
  margin: 0 auto;
  max-width: 600px;
`;

const HeaderContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 32px;

  & > h1 {
    margin-left: 22px;
  }
`;

const FormProfileContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  
  gap: 0 30px;
  & > button {
    grid-area: 2/1/3/3;
    justify-self: flex-end;
  }

  @media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export default function FormNaverProfile({
  title,
  onSubmit,
  onChange,
  dataInput,
}) {
  return (
    <FormNaverProfileContainer>
      <HeaderContentContainer>
        <Button.Icon>
          <CustomLink to={PAGES_ROUTE.home}>
            <MdKeyboardArrowLeft size={32} />
          </CustomLink>
        </Button.Icon>
        <h1>{title}</h1>
      </HeaderContentContainer>

      <FormProfileContainer onSubmit={onSubmit}>
        <div>
          <FormField
            text="Nome"
            type="text"
            name="name"
            id="name"
            onChange={onChange}
            value={dataInput.name}
            required
          />
          <FormField
            text="Data do nascimento"
            type="date"
            name="birthdate"
            id="birthdate"
            onChange={onChange}
            value={dataInput.birthdate}
            required
          />
          <FormField
            text="Projetos que participou"
            type="text"
            name="project"
            id="project"
            onChange={onChange}
            value={dataInput.project}
          />
        </div>
        <div>
          <FormField
            text="Cargo"
            type="text"
            name="job_role"
            id="job_role"
            onChange={onChange}
            value={dataInput.job_role}
          />
          <FormField
            text="Tempo de empresa"
            type="date"
            name="admission_date"
            id="admission_date"
            onChange={onChange}
            value={dataInput.admission_date}
            required
          />
          <FormField
            text="URL da foto do Naver"
            type="text"
            name="url"
            id="url"
            onChange={onChange}
            value={dataInput.url}
            required
          />
        </div>
        <Button.Dark>
          Salvar
        </Button.Dark>
      </FormProfileContainer>
    </FormNaverProfileContainer>
  );
}

FormNaverProfile.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  dataInput: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    birthdate: PropTypes.string,
    admission_date: PropTypes.string,
    job_role: PropTypes.string,
    project: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};
