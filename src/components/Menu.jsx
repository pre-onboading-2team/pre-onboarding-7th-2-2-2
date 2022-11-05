import styled from 'styled-components';

const Menu = () => {
  return (
    <MenuContainer>
      <MenuTitle>광고센터</MenuTitle>
      <MenuBtnBox>
        <MenuBtn type="button">대시보드</MenuBtn>
      </MenuBtnBox>
      <MenuBtnBox>
        <MenuBtn type="button">광고관리</MenuBtn>
      </MenuBtnBox>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  width: 100%;
  padding-top: 4rem;
`;

const MenuTitle = styled.div`
  padding-left: 6rem;
`;

const MenuBtnBox = styled.div`
  width: 100%;
  padding-left: 4rem;
`;

const MenuBtn = styled.button`
  width: 100%;
  height: 20%;
  padding-top: 2rem;
  text-align: center;
`;
export default Menu;
