import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: 1px solid transparent;
  background-color: transparent;
  border-color: ${({ active }) => (active ? 'white' : 'transparent')};
`;

export default ButtonIcon;
