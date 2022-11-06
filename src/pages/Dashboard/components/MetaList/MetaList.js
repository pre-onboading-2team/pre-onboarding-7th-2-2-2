import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getTrendData } from "../../../../store/trendData";
import MetaListItem from "./MetaListItem";

const MetaList = () => {
  const dispatch = useDispatch();
  const { filteredData } = useSelector((state) => state.trendData);

  const [metaData, setMetaData] = useState({});
  console.log(filteredData);
  console.log(metaData);
  useEffect(() => {
    dispatch(getTrendData());
  }, []);

  useEffect(() => {
    const metaObj = {
      클릭수: 0,
      광고비: 0,
      전환수: 0,
      노출수: 0,
      매출: 0,
      ROAS: 0,
    };
    filteredData.forEach((data) => {
      metaObj.클릭수 += data.click;
      metaObj.광고비 += data.cost;
      metaObj.전환수 += data.conv;
      metaObj.노출수 += (data.click / data.ctr) * 100;
      metaObj.매출 += (data.roas * data.cost) / 100;
    });
    metaObj.ROAS = (metaObj.매출 / metaObj.광고비) * 100;
    setMetaData({ ...metaObj });
  }, [filteredData]);

  return (
    <Ul>
      {Object.entries(metaData).map(([key, value]) => (
        <MetaListItem key={key} objectKey={key} value={value} />
      ))}
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > li {
    flex-basis: 27%;
    margin: 10px;
  }
`;

export default MetaList;
