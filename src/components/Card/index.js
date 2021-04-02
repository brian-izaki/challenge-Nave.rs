import styled from "styled-components";
import Button from "../Button";
import { MdDelete, MdEdit } from "react-icons/md";
import PropTypes from "prop-types";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;

  width: 25%;

  font-size: 1.2rem;

  & div img {
    filter: grayscale(100%);
  }

  & p:nth-child(2) {
    font-weight: 600;
  }
`;

export default function Card({
  srcImage,
  name,
  office,
  deleteClick,
  editClick,
}) {
  return (
    <CardContainer>
      <div>
        <img src={srcImage} alt="avatar user" />
      </div>

      <p>{name}</p>

      <p>{office}</p>

      <div>
        <Button.Icon onClick={deleteClick}>
          {" "}
          <MdDelete size="1.5rem" />{" "}
        </Button.Icon>
        <Button.Icon onClick={editClick}>
          {" "}
          <MdEdit size="1.5rem" />{" "}
        </Button.Icon>
      </div>
    </CardContainer>
  );
}

Card.propTypes = {
  srcImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  office: PropTypes.string.isRequired,
  deleteClick: PropTypes.func.isRequired,
  editClick: PropTypes.func.isRequired,
};
