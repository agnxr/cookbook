import styled, { css } from 'styled-components';
import searchIcon from 'assets/search.svg';

const Input = styled.input`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.lilac};
  font-size: ${({ theme }) => theme.fontSize.xs};
  border: none;
  border-radius: 50px;

  ::placeholder {
    letter-spacing: 1px;
    color: #fff;
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-image: url(${searchIcon});
      background-size: 15px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `}
`;

export default Input;
