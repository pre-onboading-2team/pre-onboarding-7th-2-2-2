import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTrendData } from "../../../../store/trendData";

const MetaArea = () => {
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
      click: 0,
      cost: 0,
      conv: 0,
      exposure: 0,
      return: 0,
      roas: 0,
    };
    filteredData.forEach((data) => {
      metaObj.click += data.click;
      metaObj.cost += data.cost;
      metaObj.conv += data.conv;
      metaObj.exposure += (data.click / data.ctr) * 100;
      metaObj.return += (data.roas * data.cost) / 100;
    });
    metaObj.roas = (metaObj.return / metaObj.cost) * 100;
    setMetaData({ ...metaObj });
  }, [filteredData]);

  // dailyData.forEach((data) =>)
  return <div>MetaArea</div>;
};

export default MetaArea;
