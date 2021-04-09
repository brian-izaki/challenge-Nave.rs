import styled from 'styled-components';
import PropTypes from 'prop-types';

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomLabel = styled.label`
  font-weight: 600;
  margin-bottom: 4px; 

  font-size: 0.9rem;
  line-height: 1.25rem;
  letter-spacing: 0.05rem;
`;

const CustomInput = styled.input`
  padding: 8px;
  margin-bottom: 32px;

  border: 2px solid #424242;

  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.05rem;
`;

export default function FormField({
  text, id, ...props
}) {
  return (
    <FieldContainer>
      <CustomLabel htmlFor={id}>
        {' '}
        {text}
        {' '}
      </CustomLabel>
      <CustomInput placeholder={text} {...props} />
    </FieldContainer>
  );
}

FormField.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
