import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import useInput from "../../../hooks/useInput";
import { changePeriod } from "../../../store/period";

const DatePicker = () => {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state) => state.period);
  const [startDateValue, handleStartValueChange] = useInput(startDate);
  const [endDateValue, handleEndValueChange] = useInput(endDate);
  const [isOpen, setIsOpen] = useState(false);
  const [isValidPeriod, setIsValidPeriod] = useState(false);

  useEffect(() => {
    setIsValidPeriod(
      startDateValue && endDateValue && startDateValue <= endDateValue
    );
  }, [startDateValue, endDateValue]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickDateSet = () => {
    const payload = { startDate: startDateValue, endDate: endDateValue };
    dispatch(changePeriod(payload));
    setIsOpen(false);
  };
  return (
    <Div>
      <div className="period-and-button">
        <div>{`${startDate} ~ ${endDate}`}</div>
        <button onClick={handleToggle}>{isOpen ? "닫기" : "열기"}</button>
      </div>
      {isOpen && (
        <div className="picker">
          <input
            type="date"
            value={startDateValue}
            onChange={handleStartValueChange}
          />
          <span>~</span>
          <input
            type="date"
            value={endDateValue}
            onChange={handleEndValueChange}
          />
          <button onClick={handleClickDateSet} disabled={!isValidPeriod}>
            go
          </button>
        </div>
      )}
    </Div>
  );
};

const Div = styled.div`
  min-height: 50px;
  .period-and-button {
    display: flex;
    align-items: center;
    > * {
      margin-right: 10px;
    }
  }
  .picker {
    position: absolute;
    display: flex;
    /* left: 0; */
    right: 0;
    margin-right: 10px;
    margin-top: 10px;
  }
`;
export default DatePicker;
