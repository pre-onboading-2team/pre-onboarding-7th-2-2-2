import styled from "styled-components";

import ADS_DATA_LABEL from "../../../constants/ADS_DATA_LABEL";
import formatAdsData from "../../../utils/formatAdsData";

const AdsListItem = ({ title, data }) => {
  return (
    <AdLi>
      <header>{title}</header>
      <ul>
        {Object.entries(data).map(([dataKey, data]) => (
          <li key={dataKey}>
            <div className="label">{ADS_DATA_LABEL[dataKey]}</div>
            <div className="data">{formatAdsData(dataKey, data)}</div>
          </li>
        ))}
      </ul>
      <button>수정하기</button>
    </AdLi>
  );
};

export default AdsListItem;

const AdLi = styled.li`
  width: 305px;
  height: 420px;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;

  margin: 15px;
  header {
    height: 80px;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }
  li {
    display: flex;
    margin-bottom: 20px;
    .label {
      flex-basis: 40%;
      font-size: 12px;
      color: #434343;
    }
    .data {
      flex-basis: 55%;
      font-size: 14px;
    }
  }
  button {
    align-self: flex-start;
    margin-top: 10px;
  }
`;
