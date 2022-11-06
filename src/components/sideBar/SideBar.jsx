import styled from 'styled-components';
import Service from './Service';
import Menu from './Menu';
import Guide from './Guide';

const SideBar = ({ setIsNow }) => {
  return (
    <>
      <LogoImg src="images/logo.png" alt="" />
      <Service />
      <Menu setIsNow={setIsNow} />
      <Guide />
    </>
  );
};

const LogoImg = styled.img`
  width: 70%;
  padding-top: 6rem;
  padding-left: 4rem;
`;

export default SideBar;
