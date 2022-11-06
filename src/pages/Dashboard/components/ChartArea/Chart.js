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

const Chart = ({ leftTagEntries, rightTagEntries }) => {
  const { filteredData } = useSelector((state) => state.trendData);

  const [leftDataKey, leftDataTagName] = leftTagEntries;
  const [rightDataKey, rightDataTagName] = rightTagEntries;
  const formatDateToMMDD = (fullDateStr) =>
    fullDateStr.toLocaleString().slice(5, 10);

  return (
    <LineChart
      width={700}
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
      <XAxis dataKey="date" tickFormatter={formatDateToMMDD} />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Line
        yAxisId="left"
        type="monotone"
        dataKey={leftDataKey} // 와이축 데이터 1
        name={leftDataTagName}
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line
        yAxisId="right"
        type="monotone"
        dataKey={rightDataKey} // 와이축 데이터 2
        name={rightDataTagName}
        stroke="#82ca9d"
      />
    </LineChart>
  );
};

export default Chart;
