import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ secondary }) => (secondary ? '#f2e2ff' : '#e2eeff')};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  font-size: ${({ secondary }) => (secondary ? '10px' : '16px')};
  text-transform: uppercase;
`;

export default Button;
