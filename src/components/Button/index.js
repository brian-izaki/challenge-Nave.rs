import styled from 'styled-components'

const Button = styled.button`
  background-color: transparent;
  border: none;
  width: 176px;
  height: 40px;

  font-size: 0.8rem;
  line-height: 1.5rem;
  font-weight: 600;
  
  cursor: pointer;

  transition: ease .5s;

  &:hover{
    opacity: 0.4;
  }
`

Button.Dark = styled(Button)`
  background-color: ${props => props.theme.mainColor};
  
  color: ${props => props.theme.backgroundColor};

  &:hover {
    opacity: 0.6;
  }
`

Button.Light = styled(Button)`
  box-sizing: border-box;
  background-color: ${props => props.theme.backgroundColor};
  border: 2px solid ${props => props.theme.mainColor};

  color: ${props => props.theme.mainColor};

  &:hover {
    filter: brightness(70%)
  }
`

Button.Icon = styled(Button)`
  width: 34px;
  height: 32px;
`

export default Button;