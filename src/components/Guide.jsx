import styled from 'styled-components';

const Guide = () => {
  return (
    <GuideContainer>
      <div>
        <GuideTitle>레버 이용 가이드</GuideTitle>
        <GuideBtn type="button">시작하기 전에 알아보기</GuideBtn>
      </div>
      <GuideText>
        <p>레버는 함께 만들어갑니다.</p>
        <a href="/">이용약관</a>
      </GuideText>
    </GuideContainer>
  );
};

const GuideContainer = styled.div`
  width: 100%;
  padding-top: 10rem;
`;

const GuideTitle = styled.div`
  padding-top: 3rem;
  padding-left: 6rem;
`;

const GuideBtn = styled.div`
  padding-top: 2rem;
  padding-left: 6rem;
`;

const GuideText = styled.div`
  padding-top: 2rem;
  padding-left: 6rem;
`;

export default Guide;
