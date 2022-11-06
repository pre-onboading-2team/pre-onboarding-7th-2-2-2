import { toTenThousendWon } from "./formatFns";

const formatAdsData = (key, value) => {
  switch (key) {
    case "budget":
    case "cost":
    case "revenue":
      return toTenThousendWon(value);
    case "startDate":
      return value.split("T")[0];
    case "roas":
      return value + "%";
    case "status":
      return value === "active" ? "진행중" : "중단됨";
    default:
      return value;
  }
};

export default formatAdsData;
