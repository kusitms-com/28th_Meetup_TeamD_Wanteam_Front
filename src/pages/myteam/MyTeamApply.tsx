import styled from 'styled-components';
import useAppliedTeam from '../../hooks/myTeam/useAppliedTeam';
import MyTeamApplyContainer from '../../components/myteam/apply/MyTeamApplyContainer';
import MyTeamEmpty from '../../components/myteam/MyTeamEmpty';

const MyTeamApply = () => {
  const { appliedTeamData } = useAppliedTeam();

  return (
    <ApplyLayout>
      {appliedTeamData?.data.data.map((each) => (
        <MyTeamApplyContainer {...each}></MyTeamApplyContainer>
      ))}
      {appliedTeamData && appliedTeamData.data.data.length == 0 && (
        <MyTeamEmpty text="아직 지원한 팀이 없어요" />
      )}
    </ApplyLayout>
  );
};
const ApplyLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;
export default MyTeamApply;
