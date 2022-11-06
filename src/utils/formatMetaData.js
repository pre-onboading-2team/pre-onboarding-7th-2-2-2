import { toTenThousendWon } from "./formatFns";

const formatMetaData = (key, value) => {
  switch (key) {
    case "ROAS":
      return Math.round(value) + "%";
    case "광고비":
    case "매출":
      return toTenThousendWon(value);
    case "노출수":
      return Math.round(value / 10000) + "만 회";
    case "클릭수":
      return (Math.round(value / 1000) * 0.1).toFixed(1) + "만 회";
    case "전환수":
      return value + "회";
    default:
      return value;
  }
};

export default formatMetaData;
