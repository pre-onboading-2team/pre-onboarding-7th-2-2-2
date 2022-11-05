/* eslint-disable arrow-parens */
import { useState } from 'react';
import styled from 'styled-components';
import ADManagement from '../components/ADManagement';
import DashBoard from '../components/DashBoard';
import SideBar from '../components/SideBar';

const Home = () => {
  const [content, setContent] = useState();

  const onClickBtn = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    대시보드: <DashBoard />,
    광고관리: <ADManagement />,
  };
  return (
    <HomeContainer>
      <SideBarBox>
        <SideBar />
      </SideBarBox>
      <DashBoardBox>
        <DashBoard onClick={onClickBtn} />
      </DashBoardBox>
      <div>
        <ADManagement />
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  height: 100%;
`;

const DashBoardBox = styled.div`
  width: 80%;
  background-color: yellow;
`;
const SideBarBox = styled.div`
  width: 20%;
`;
export default Home;
