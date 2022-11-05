import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .select-area {
    display: flex;
    flex-direction: column;
  }
  .ads-area {
    display: flex;
    flex-direction: column;
  }
`;

const Aside = ({ className }) => {
  const navigate = useNavigate();

  const handleClickDashBoard = () => {
    navigate("/");
  };
  const handleClickAds = () => {
    navigate("/ads");
  };

  return (
    <Container className={className}>
      <div className="select-area">
        <label htmlFor="service">서비스</label>
        <select name="" id="service">
          <option value="">매드업</option>
          <option value="">서비스 추가하기</option>
        </select>
      </div>
      <div className="ads-area">
        <label htmlFor="">광고센터</label>
        <button onClick={handleClickDashBoard}>대시보드</button>
        <button onClick={handleClickAds}>광고관리</button>
      </div>
    </Container>
  );
};

export default Aside;
