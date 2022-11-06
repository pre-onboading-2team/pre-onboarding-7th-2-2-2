import styled from "styled-components";

import { ChartArea, Header, MetaList } from "./components";

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <header>통합광고현황</header>
      <ChartAndDataArea className="area">
        <MetaList />
        <ChartArea />
      </ChartAndDataArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .area {
    margin: 20px;
    flex: 1;
  }
`;

const ChartAndDataArea = styled.div`
  background-color: white;
`;

export default Dashboard;
