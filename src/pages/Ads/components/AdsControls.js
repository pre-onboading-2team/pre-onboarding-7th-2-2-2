import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { changeAdsfilter } from "../../../store/adsFilter";

const AdsControls = () => {
  const dispatch = useDispatch();

  const { filter } = useSelector((state) => state.adsFilter);

  const handleChange = (e) => {
    dispatch(changeAdsfilter(e.target.value));
  };
  return (
    <Div>
      <select name="" id="" value={filter} onChange={handleChange}>
        <option value="all">전체 광고</option>
        <option value="active">진행중</option>
        <option value="ended">중단됨</option>
      </select>
      <button>광고 만들기</button>
    </Div>
  );
};

export default AdsControls;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
