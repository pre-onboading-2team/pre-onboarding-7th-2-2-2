import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getAdsData } from "../../../store/adsData";
import AdsListItem from "./AdsListItem";

const AdsList = () => {
  const dispatch = useDispatch();

  const { ads } = useSelector((state) => state.adsData);
  console.log(ads);
  useEffect(() => {
    dispatch(getAdsData());
  }, []);

  return (
    <Ul>
      {ads.map((ad) => {
        const { id, title, budget, startDate, status } = ad;
        const { cost, roas } = ad.report;
        const revenue = (roas * cost) / 100;
        return (
          <AdsListItem
            key={id}
            title={title}
            data={{ budget, startDate, status, cost, roas, revenue }}
          />
        );
      })}
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export default AdsList;
