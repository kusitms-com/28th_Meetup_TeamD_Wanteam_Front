import styled from 'styled-components';
// import bgSrc from '/assets/images/login/login-bg.svg';
import btnSrc from '/assets/images/login/login-button.svg';
import {
  kakaoAuthorize,
  // loginWithKakaoToken,
} from '../../components/login/KakaoLogin';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { headerSelectedState, kakaoAccessTokenState } from '../../recoil/atom';
import { useEffect } from 'react';
import { Headers } from '../../constants/Header';
import useLoginWithKakaoToken from '../../hooks/login/useLoginWithKakaoToken';

const Login = () => {
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  const kakaoAccessToken = useRecoilValue(kakaoAccessTokenState);
  const { handleLogin } = useLoginWithKakaoToken();
  useEffect(() => setHeaderSelected(Headers.login));

  const handleClick = () => {
    if (kakaoAccessToken) {
      console.log('kakao토큰보유중', kakaoAccessToken);
      handleLogin(kakaoAccessToken);
    } else {
      kakaoAuthorize();
    }
  };
  return (
    <LoginLayout>
      <LoginTextContainer>
        <div>
          {'간편하게 로그인하고\n'}
          <span>{'똑똑한 팀 모집'}</span>
          {'을 시작해보세요'}
        </div>
        <LoginButton src={btnSrc} onClick={handleClick} />
      </LoginTextContainer>
      <LoginBgImg
        src={'https://wanteam-bucket.s3.ap-northeast-2.amazonaws.com/img3.svg'}
      />
    </LoginLayout>
  );
};
const LoginLayout = styled.div`
  max-width: 122.4rem;
  margin: auto;

  display: flex;
  justify-content: space-between;
`;
const LoginTextContainer = styled.div`
  color: ${(props) => props.theme.colors.gray100};
  ${(props) => props.theme.fonts.heading3};

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 3rem;

  white-space: break-spaces;

  > div span {
    color: ${(props) => props.theme.colors.primary60};
  }
`;
const LoginButton = styled.img`
  width: 39rem;
  height: 5.8rem;

  margin-bottom: 100px;

  cursor: pointer;
`;
const LoginBgImg = styled.img`
  width: 83rem;
  /* height: 70rem; */
`;
export default Login;
