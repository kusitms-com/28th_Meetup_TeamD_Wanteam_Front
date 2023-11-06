import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProfileSubInfo from '../../components/profile/ProfileSubInfo';
import ProfileKeyword from '../../components/profile/ProfileKeyword';
import ProfileRecommendation from '../../components/profile/ProfileRecommendation';
import ProfilePersonality from '../../components/profile/ProfilePersonality';
import { profileDatas, reviewDatas } from '../../constants/Profile';

const Profile = () => {
  const { userId } = useParams();
  userId;
  return (
    <ProfileLayout>
      <ProfileInfo profileData={profileDatas} />
      <ProfileSubInfo />
      <ProfileKeyword
        keywordData={reviewDatas.keywords}
        name={profileDatas.name}
      />
      <ProfilePersonality
        teamCurturesData={reviewDatas.teamCultures}
        workMethodsData={reviewDatas.workMethods}
        name={profileDatas.name}
      />
      <ProfileRecommendation
        recommendationData={reviewDatas.recommendation}
        name={profileDatas.name}
      />
    </ProfileLayout>
  );
};
const ProfileLayout = styled.div`
  max-width: 122.4rem;
  margin: auto;
`;

export default Profile;
