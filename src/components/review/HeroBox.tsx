import { styled } from 'styled-components';
import { userReviewResponse } from '../../interface/Review';

interface HeroBoxProps {
  hero: userReviewResponse;
  selected: boolean;
  onSelect: () => void;
}

const HeroBox = ({ hero, selected, onSelect }: HeroBoxProps) => {
  return (
    <HeroBoxLayout $isSelected={selected}>
      <HeroImage src={hero.teamMemberImage} alt={hero.teamMemberImage} />
      <HeroName>{hero.teamMemberName}</HeroName>
      <Radio
        type="radio"
        id={hero.teamMemberName}
        name="heroSelection"
        checked={selected}
        onChange={onSelect}
      />
    </HeroBoxLayout>
  );
};

export default HeroBox;

const HeroBoxLayout = styled.label<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.primary20};
  border-radius: 24px;
  width: 100%;
  padding: 2rem 3rem;
  cursor: pointer;
  border: 2px solid
    ${(props) =>
      props.$isSelected ? props.theme.colors.primary40 : 'transparent'};
`;

const HeroImage = styled.img`
  width: 9rem;
  height: 9rem;
  flex-shrink: 0;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.primary40};
`;

const HeroName = styled.div`
  ${({ theme }) => theme.fonts.subtitleXXL};
  color: ${({ theme }) => theme.colors.gray90};
  width: 100%;
  text-align: left;
`;

const Radio = styled.input`
  vertical-align: middle;
  appearance: none;
  width: 48px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  transition: background-image 0.3s, border-color 0.3s;

  &:checked {
    background-image: url('/assets/images/payment/radioSelected.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
