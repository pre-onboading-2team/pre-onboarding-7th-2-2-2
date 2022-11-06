import { useSelector } from "react-redux";

import Chart from "./Chart";
import ChartFilter from "./ChartFilter";

const ChartArea = ({ className }) => {
  const tagFilterEntries = [
    ["click", "클릭수"],
    ["cost", "광고비"],
    ["conv", "전환수"],
    ["exposure", "노출수"],
    ["returns", "매출"],
    ["roas", "ROAS"],
  ];

  const { leftFilterEntries, rightFilterEntries } = useSelector(
    (state) => state.chartFilter
  );

  return (
    <div className={className}>
      <ChartFilter
        tagFilterEntries={tagFilterEntries}
        leftFilterEntries={leftFilterEntries}
        rightFilterEntries={rightFilterEntries}
      />
      <Chart
        leftTagEntries={leftFilterEntries}
        rightTagEntries={rightFilterEntries}
      />
    </div>
  );
};

export default ChartArea;
