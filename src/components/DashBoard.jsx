import styled from 'styled-components';
import ApexCharts from 'apexcharts';

const DashBoard = () => {
  return (
    <>
      <DashBoardTitleBox>
        <DashBoardTitle>대시보드</DashBoardTitle>
        <DatePicker>DatePicker</DatePicker>
      </DashBoardTitleBox>
      <DashBoardContent>통합 광고 현황</DashBoardContent>
    </>
  );
};

const DashBoardTitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const DashBoardTitle = styled.div`
  padding-top: 8rem;
  padding-left: 4rem;
  font-size: 2rem;
`;

const DatePicker = styled.div`
  padding-top: 8rem;
  padding-right: 4rem;
`;

const DashBoardContent = styled.div`
  padding-top: 4rem;
  padding-left: 4rem;
`;
export default DashBoard;
