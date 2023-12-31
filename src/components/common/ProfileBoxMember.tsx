import styled from 'styled-components';
import { ProfileBoxProps } from '../../interface/Contest';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loginInfoState, loginModalState } from '../../recoil/atom';

const ProfileBoxMember: React.FC<ProfileBoxProps> = ({
  hasProfileButton,
  isBgColorWhite,
  hasBorder,
  memberInfo,
  width,
  height,
}) => {
  const navigate = useNavigate();
  const loginInfo = useRecoilValue(loginInfoState);
  const setLoginModal = useSetRecoilState(loginModalState);

  const handleClick = () => {
    if (loginInfo.isLogin) {
      navigate(`/profile/${memberInfo.teamMemberId}`);
    } else {
      setLoginModal(true);
    }
  };
  return (
    <Container
      $isBgColorWhite={isBgColorWhite}
      $hasBorder={hasBorder}
      $cWidth={width}
      $cHeight={height}
    >
      <MemberImg src={memberInfo.teamMemberImage} />
      <Name>{memberInfo.teamMemberName}</Name>
      <Hr />
      <Part>{memberInfo.teamMemberTask[0]}</Part>
      {hasProfileButton ? (
        <ViewProfileButton onClick={handleClick}>프로필 보기</ViewProfileButton>
      ) : (
        <Part>{memberInfo.teamMemberMajor[0]}</Part>
      )}
    </Container>
  );
};
const Container = styled.div<{
  $isBgColorWhite: boolean;
  $hasBorder: boolean;
  $cWidth?: number;
  $cHeight?: number;
}>`
  width: ${(props) => (props.$cWidth ? `${props.$cWidth}rem` : '16.6rem')};
  height: ${(props) => (props.$cHeight ? `${props.$cHeight}rem` : '22.4rem')};

  /* ${(props) => (props.$cWidth ? `width : ${props.$cWidth}rem` : null)} */
  /* ${(props) => (props.$cHeight ? `height : ${props.$cHeight}rem` : null)} */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 0.3rem; */

  border: 1px solid ${(props) => props.theme.colors.gray20};
  border-radius: 0.8rem;
  border: ${(props) =>
    props.$hasBorder
      ? '1px solid ${(props) => props.theme.colors.gray20}'
      : 'none'};

  background-color: ${(props) =>
    props.$isBgColorWhite
      ? props.theme.colors.white
      : props.theme.colors.primary10};

  padding: 1rem 3rem 1rem 3rem;
`;
const MemberImg = styled.img`
  width: 65%;
  /* width: 7.8rem; */
  /* height: 7.8rem; */
  height: auto;
  aspect-ratio: 1 / 1; /* 가로 세로 비율을 1:1로 유지 */

  border: 1px solid ${(props) => props.theme.colors.primary20};
  border-radius: 50%;

  object-fit: cover;
`;
const Name = styled.div`
  ${(props) => props.theme.fonts.heading5};
  color: ${(props) => props.theme.colors.gray90};
  margin: 0.8rem 0;
  white-space: nowrap;
`;
const Hr = styled.div`
  width: 100%;
  height: 1px;

  border-top: 1px solid ${(props) => props.theme.colors.primary60};
  border-color: ${(props) => props.theme.colors.primary60};

  margin-bottom: 0.5rem;
`;
const Part = styled.div`
  ${(props) => props.theme.fonts.bodyXS};
  color: ${(props) => props.theme.colors.gray70};
  /* font-size: 90%; */

  text-align: center;

  white-space: nowrap;
`;
const ViewProfileButton = styled.div`
  width: 12rem;
  height: 3.6rem;

  border: 1px solid ${(props) => props.theme.colors.primary60};
  border-radius: 1.8rem;
  ${(props) => props.theme.fonts.subtitleXS};
  color: ${(props) => props.theme.colors.primary60};
  background-color: ${(props) => props.theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1rem 0;
  cursor: pointer;
`;
export default ProfileBoxMember;
