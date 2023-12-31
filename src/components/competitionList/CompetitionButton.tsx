import { css, styled } from 'styled-components';

interface competitionButtonProps {
  onClick: () => void;
  text: string;
  selected: boolean;
}

const CompetitionButton = ({
  selected,
  onClick,
  text,
}: competitionButtonProps) => {
  return (
    <CompetitionButtonLayout $selected={selected} onClick={onClick}>
      {text}
    </CompetitionButtonLayout>
  );
};

export default CompetitionButton;

const CompetitionButtonLayout = styled.button<{ $selected: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid black;
  background: ${({ theme }) => theme.colors.gray10};
  color: ${({ theme }) => theme.colors.gray70};
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  white-space: nowrap;

  ${(props) =>
    props.$selected &&
    css`
      background: ${({ theme }) => theme.colors.primary60};
      color: ${({ theme }) => theme.colors.white};
    `};

  &:hover {
    background: ${({ theme }) => theme.colors.primary60};
    color: ${({ theme }) => theme.colors.white};
    transition: 0.3s;
  }
`;
