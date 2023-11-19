import { styled } from 'styled-components';
import ExternalReviewHeader from '../../components/review/ExternalReviewHeader';
import ReviewKeywords from '../../components/review/ReviewKeywords';
import ReviewTendency from '../../components/review/ReviewTendency';
import BeforeNextButton from '../../components/common/BeforeNextButton';
import { useParams } from 'react-router-dom';
import useProfile from '../../hooks/profile/useProfile';

const ExternalReview = () => {
  const { userId } = useParams();
  const { profileData } = useProfile(userId);

  return (
    <>
      <ExternalReviewHeader profileData={profileData?.data.data} />
      <ExternalReviewContainer>
        <ReviewKeywords />
        <ReviewTendency />
        <BeforeNextButton
          next="제출하기"
          route="/review/multipleChoice"
          isNextDisabled={false}
        />
      </ExternalReviewContainer>
    </>
  );
};

export default ExternalReview;

const ExternalReviewContainer = styled.div`
  margin: 0 auto;
  max-width: 122.4rem;
`;