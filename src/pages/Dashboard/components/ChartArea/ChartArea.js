import { useState } from "react";

import Chart from "./Chart";
import ChartFilter from "./ChartFilter";

const ChartArea = () => {
  const tagFilterEntries = [
    ["click", "클릭수"],
    ["cost", "광고비"],
    ["conv", "전환수"],
    ["exposure", "노출수"],
    ["returns", "매출"],
    ["roas", "ROAS"],
  ];

  const [leftTagEntries, setLeftTagEntries] = useState(tagFilterEntries[0]);
  const [rightTagEntries, setRightTagEntries] = useState(tagFilterEntries[1]);

  return (
    <div>
      <ChartFilter
        tagFilterEntries={tagFilterEntries}
        setLeftTagEntries={setLeftTagEntries}
        setRightTagEntries={setRightTagEntries}
        leftTagEntries={leftTagEntries}
        rightTagEntries={rightTagEntries}
      />
      <Chart
        leftTagEntries={leftTagEntries}
        rightTagEntries={rightTagEntries}
      />
    </div>
  );
};

export default ChartArea;
