/* eslint-disable arrow-parens */
import { useState } from 'react';
import styled from 'styled-components';
import ADManagement from '../components/ADManagement';
import DashBoard from '../components/DashBoard';
import SideBar from '../components/sideBar/SideBar';

const Home = () => {
  const [isNow, setIsNow] = useState(true);

  return (
    <HomeContainer>
      <SideBarBox>
        <SideBar setIsNow={setIsNow} />
      </SideBarBox>
      <DataBodyBox>{isNow ? <DashBoard /> : <ADManagement />}</DataBodyBox>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  height: 100%;
`;

const DataBodyBox = styled.div`
  width: 80%;
`;
const SideBarBox = styled.div`
  width: 20%;
`;
export default Home;
