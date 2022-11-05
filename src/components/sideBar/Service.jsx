import styled from 'styled-components';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Service = () => {
  return (
    <ServiceContainer>
      <ServiceTitle value="service">서비스</ServiceTitle>
      <SelectBox>
        <ServiceSelect name="service" id="service">
          <option value="매드업">매드업</option>
          <option value="서비스 추가하기">서비스 추가하기</option>
        </ServiceSelect>
      </SelectBox>
    </ServiceContainer>
  );
};

const ServiceContainer = styled.div`
width:100%  
padding-top: 4rem;
font-size: 1rem;
`;

const ServiceTitle = styled.div`
  width: 100%;
  padding-top: 2rem;
  padding-left: 6rem;
`;

const SelectBox = styled.div`
  padding-top: 0.5rem;
  padding-left: 4rem;
`;

const ServiceSelect = styled.select`
  width: 100%;
`;

export default Service;
