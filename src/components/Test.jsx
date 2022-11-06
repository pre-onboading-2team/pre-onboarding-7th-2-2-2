/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-plusplus */
/* eslint-disable arrow-parens */
/* eslint-disable camelcase */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useEffect, useState } from 'react';
import trend_data_set from '../data/trend_data_set.json';

const Test = ({ selected, secSelected, stDate, edDate }) => {
  const [usageStatus, setUsageStatus] = useState([]);
  const [click, setClick] = useState([]);
  const [originData, setOriginData] = useState([]);

  useEffect(() => {
    if (stDate && edDate) {
      setClick(
        originData.filter(
          item =>
            new Date(item.xAxis) >= stDate && new Date(item.xAxis) <= edDate
        )
      );
    }
  }, [stDate, edDate]);

  useEffect(() => {
    const dateArr = [];
    trend_data_set.report.daily.map(data => {
      dateArr.push(data.date);
      return null;
      // return {
      //   xAxis: data.date,
      //   usage: data.cvr,
      //   usageLast: data.ctr,
      //   bill: data.conv,
      // };
    });
    const sortDateArr = dateArr.sort();

    setOriginData(
      sortDateArr.map(date => {
        for (let i = 0; i < trend_data_set.report.daily.length; i++) {
          if (date === trend_data_set.report.daily[i].date) {
            if (secSelected !== '') {
              return {
                xAxis: trend_data_set.report.daily[i].date,
                usage: trend_data_set.report.daily[i][selected],
                usageLast: trend_data_set.report.daily[i][secSelected],
                bill: trend_data_set.report.daily[i].conv,
              };
            }
            return {
              xAxis: trend_data_set.report.daily[i].date,
              usage: trend_data_set.report.daily[i][selected],
              bill: trend_data_set.report.daily[i].conv,
            };
          }
        }

        return null;
      })
    );
  }, [selected, secSelected]);

  useEffect(() => {
    setClick(originData);
  }, [originData]);

  useEffect(() => {
    setUsageStatus([{}, ...click, {}]);
  }, [click]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={usageStatus}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="xAxis" />

        {secSelected && secSelected !== '' ? (
          <>
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
          </>
        ) : (
          <YAxis />
        )}
        <Tooltip />
        <Legend />

        {secSelected && secSelected !== '' ? (
          <>
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="usage"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="usageLast"
              stroke="#82ca9d"
            />
          </>
        ) : (
          <Line
            type="monotone"
            dataKey="usage"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Test;
