import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  > div {
    display: flex;
    flex-direction: column;
    margin: 20px;
    label {
      margin-bottom: 10px;
    }
    button {
      margin-bottom: 10px;
    }
  }
  .logo {
    align-items: center;
  }
  .select-area {
  }
  .ads-area {
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
      <div className="logo">LOGO</div>
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
