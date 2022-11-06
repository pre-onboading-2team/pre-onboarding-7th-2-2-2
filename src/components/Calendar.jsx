/* eslint-disable arrow-parens */
import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import { toDate } from 'date-fns/esm';

const Calendar = ({ setStDate, setEdDate }) => {
  const [startDate, setStartDate] = useState(new Date()); // 시작 날짜
  const [endDate1, setEndDate1] = useState(new Date()); // 종료 날짜

  const onChange = dates => {
    setStartDate(dates);
  };

  useEffect(() => {
    const tempDate = new Date();
    tempDate.setDate(startDate.getDate() + 7);
    setEndDate1(tempDate);
    setStDate(startDate);
  }, [startDate]);

  useEffect(() => {
    console.log(endDate1);
    setEdDate(endDate1);
  }, [endDate1]);

  registerLocale('ko', ko);

  return (
    <div>
      <DatePicker
        locale="ko"
        dateFormat="YYYY년 MM월 DD일"
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate1}
        inline
        readOnly
      />
    </div>
  );
};

export default Calendar;
