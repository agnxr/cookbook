import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import cupcakes from 'assets/cupcakes.jpg';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  min-height: 300px;
  display: grid;
  /* grid-template-rows: 0.25fr 1fr; */
`;

const InnerWrapper = styled.div`
  padding: 20px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.light};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 0;
`;

const StyledHeading = styled(Heading)`
  margin: 0;
`;

const Card = ({ postType, src, title }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={postType}>
      <StyledHeading>{title}</StyledHeading>
      <DateInfo>3 days</DateInfo>
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde eum, voluptates ipsa omnis
        doloribus consequuntur eligendi illo repellat debitis? Minima, possimus facilis illo quia
        vel quis iure magnam tempore a!
      </Paragraph>
      <img src={src} alt={title} width="500px" />
      <Button secondary>remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  postType: PropTypes.oneOf(['dessert', 'dinner', 'drink']),
  src: PropTypes.string,
  title: PropTypes.string,
};

Card.defaultProps = {
  postType: 'dessert',
  src: cupcakes,
  title: 'New recipe',
};

export default Card;
