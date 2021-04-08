import { MdDelete, MdEdit } from "react-icons/md";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../Button";
import CustomLink from "../CustomLink";

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

export default function Card({
  profileData,
  editPage,
  showModalProfile,
  showModalDeleteProfile,
}) {
  
  return (
    <CardContainer>
      <div onClick={showModalProfile}>
        <img src={profileData.url} alt="avatar user" />
      </div>

      <p>{profileData.name}</p>

      <p>{profileData.job_role}</p>

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
  );
}

Card.propTypes = {
  profileData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    birthdate: PropTypes.string,
    admission_date: PropTypes.string,
    job_role: PropTypes.string,
    project: PropTypes.string,
    url: PropTypes.string,
  }),
  editPage: PropTypes.string.isRequired,
};
