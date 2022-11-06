const formatAdsData = (key, value) => {
  switch (key) {
    case "startDate":
      return value.split("T")[0];
    case "budget":
      return Math.round(value / 10000) + "만 원";
    case "roas":
      return value + "%";
    case "revenue":
      return Math.round(value / 10000) + "만 원";
    case "cost":
      return Math.round(value / 10000) + "만 원";
    default:
      return value;
  }
};

export default formatAdsData;
