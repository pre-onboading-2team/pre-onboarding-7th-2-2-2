import { useSelector } from "react-redux";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = () => {
  const { filteredData } = useSelector((state) => state.trendData);

  return (
    <LineChart
      width={500}
      height={300}
      data={filteredData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" /> {/* 날짜 */}
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Line
        yAxisId="left"
        type="monotone"
        dataKey="click" // 와이축 데이터 1
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line
        yAxisId="right"
        type="monotone"
        dataKey="roas" // 와이축 데이터 2
        stroke="#82ca9d"
      />
    </LineChart>
  );
};

export default Chart;
