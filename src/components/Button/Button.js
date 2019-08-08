import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #f2e2ff;
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #ddfffc;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
