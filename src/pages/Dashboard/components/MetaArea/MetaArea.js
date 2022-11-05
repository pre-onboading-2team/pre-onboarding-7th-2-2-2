// import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTrendData } from "../../../../store/trendData";

const MetaArea = () => {
  const dispatch = useDispatch();
  const { filteredData } = useSelector((state) => state.trendData);

  // const [metaData, setMetaData] = useState({});
  console.log(filteredData);
  useEffect(() => {
    dispatch(getTrendData());
  }, []);

  // useEffect(() => {}, [dailyData]);

  // dailyData.forEach((data) =>)
  return <div>MetaArea</div>;
};

export default MetaArea;
