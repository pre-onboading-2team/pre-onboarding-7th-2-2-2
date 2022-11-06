import styled from "styled-components";

import DatePicker from "./DatePicker";
const Header = () => {
  return (
    <StyledHeader>
      <div>대시보드</div>
      <DatePicker />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
export default Header;
