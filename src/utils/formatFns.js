export const toTenThousendWon = (num) =>
  Math.round(num / 10000).toLocaleString("kr-KR") + "만 원";
