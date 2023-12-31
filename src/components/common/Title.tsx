import { styled } from 'styled-components';

interface TitleProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Title = ({ children, style }: TitleProps) => {
  return (
    <TitleContainer style={style}>
      <Star src="/assets/images/review/star.svg" alt="star" />
      {children}
    </TitleContainer>
  );
};
export default Title;

const TitleContainer = styled.div`
  position: relative;
  ${({ theme }) => theme.fonts.heading4};
  color: ${({ theme }) => theme.colors.gray90};
`;

const Star = styled.img`
  position: absolute;
  top: -1rem;
  left: -2rem;

  width: 2rem;
  height: 2rem;
`;
