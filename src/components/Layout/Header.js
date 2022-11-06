import styled from "styled-components";

const Div = styled.div`
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 20px;
`;

const Header = () => {
  return (
    <Div>
      <div>사용자 님</div>
    </Div>
  );
};

export default Header;
