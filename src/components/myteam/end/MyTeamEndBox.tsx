import { styled } from 'styled-components';
import StarTtile from '../../common/StarTtile';
import Button from '../../common/Button';
import TeamMemberScrollBox from '../active/TeamMemberScrollBox';
import Title from '../../common/Title';
import { EndTeamData } from '../../../interface/MyTeam';
import { useNavigate } from 'react-router-dom';
import useIsReviewedOnTeam from '../../../hooks/review/useIsReviewedOnTeam';

interface MyTeamEndBoxProps {
  endTeam: EndTeamData;
}

const MyTeamEndBox = ({ endTeam }: MyTeamEndBoxProps) => {
  // console.log(endTeam);
  const naviate = useNavigate();
  const handleClick = (isActive: boolean) => {
    if (isActive) {
      naviate(`/review/${endTeam.teamId}/subjective`);
    }
  };
  const { isReviewedOnTeamData } = useIsReviewedOnTeam({
    teamId: endTeam.teamId,
  });
  console.log(isReviewedOnTeamData);
  return (
    <MyTeamEndBoxContainer>
      {endTeam && (
        <>
          <MyTeamEndLeft>
            <EndTitle>다음 팀 활동을 위해</EndTitle>
            <h1>팀원들에게 리뷰를 남겨주세요!</h1>
            <p>팀원들에게 리뷰를 남겨야</p>
            <p>내가 받은 리뷰를 볼 수 있어요!</p>
            <MyTeamDiv>
              <img
                src={'/assets/images/myteam/myteam_end.svg'}
                alt={'myteam_end'}
              />
              <ButtonStyle
                onClick={() =>
                  handleClick(!isReviewedOnTeamData?.data.data.isReviewedBefore)
                }
                $isActive={!isReviewedOnTeamData?.data.data.isReviewedBefore}
              >
                {' '}
                리뷰 작성하러 가기
                <img
                  src={'/assets/images/common/right_arrow.svg'}
                  alt={'right_arrow'}
                />
              </ButtonStyle>
            </MyTeamDiv>
          </MyTeamEndLeft>
          <MyTeamEndRight>
            <MyTeamEndRightTop>
              <p>대회명</p>
              <h1>{endTeam.contestTitle}</h1>
            </MyTeamEndRightTop>

            <RightFlexBox>
              <StarTtile>
                함께했던 팀원들 <span>총 {endTeam.memberSize}명</span>
              </StarTtile>
              <p>활동 종료일 : {endTeam.endDate}</p>
            </RightFlexBox>
            {endTeam.leaderInfo && endTeam.teamMemeberInfos && (
              <TeamMemberScrollBox
                teamLeaderInfo={endTeam.leaderInfo}
                teamMembersInfo={endTeam.teamMemeberInfos}
              />
            )}
          </MyTeamEndRight>
        </>
      )}
    </MyTeamEndBoxContainer>
  );
};

export default MyTeamEndBox;

const MyTeamEndBoxContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.primary10};
  padding: 6rem;
  gap: 4rem;
  border-radius: 10px;
  margin-bottom: 3rem;
`;

const Box = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
`;

const MyTeamEndLeft = styled(Box)`
  width: 35%;
  padding: 5rem 5.5rem;

  h1 {
    ${({ theme }) => theme.fonts.subtitleXL};
    color: ${({ theme }) => theme.colors.primary60};
    margin-bottom: 1.5rem;
    white-space: nowrap;
  }
  p {
    ${({ theme }) => theme.fonts.bodyM};
    color: ${({ theme }) => theme.colors.primary90};
  }
`;

const MyTeamDiv = styled.div`
  margin: 3rem 0 5rem 0;
  text-align: center;
  position: relative;
`;

const MyTeamEndRight = styled.div`
  width: 65%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const MyTeamEndRightTop = styled(Box)`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  gap: 1.5rem;
  color: ${({ theme }) => theme.colors.gray90};
  p {
    ${({ theme }) => theme.fonts.bodyL};
  }
  h1 {
    ${({ theme }) => theme.fonts.subtitleL};
  }
`;

const ButtonStyle = styled(Button)<{ $isActive?: boolean }>`
  height: 6rem;
  position: absolute;
  bottom: -5rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 4rem;

  border-radius: 3.2rem;
  border: 1px solid
    ${(props) =>
      props.$isActive
        ? props.theme.colors.primary20
        : props.theme.colors.gray50};

  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.primary60 : props.theme.colors.gray10};

  ${(props) => props.theme.fonts.buttonL};
  color: ${(props) =>
    props.$isActive ? props.theme.colors.white : props.theme.colors.gray40};

  cursor: ${(props) => (props.$isActive ? 'pointer' : 'default')};
`;

const RightFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    ${({ theme }) => theme.fonts.subtitleS};
    color: ${({ theme }) => theme.colors.gray90};
  }
`;

const EndTitle = styled(Title)`
  ${({ theme }) => theme.fonts.subtitleL};
`;
