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
            <div>{ADS_DATA_LABEL[dataKey]}</div>
            <div>{formatAdsData(dataKey, data)}</div>
          </li>
        ))}
      </ul>
    </AdLi>
  );
};

export default AdsListItem;

const AdLi = styled.li`
  width: 200px;
  height: 300px;
  background-color: white;
  margin: 15px;
`;
