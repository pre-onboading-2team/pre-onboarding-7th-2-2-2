/* eslint-disable no-const-assign */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-parens */
/* eslint-disable camelcase */
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Test from './Test';
import Calendar from './Calendar';

const DashBoard = () => {
  const selectList = ['roas', 'click', 'cost', 'imp', 'convValue', 'cpc'];
  const [selected, setSelected] = useState('');
  const [secSelected, setSecSelected] = useState('');
  const [secSelectList, setSecSelectList] = useState([]);
  const [stDate, setStDate] = useState(new Date());
  const [edDate, setEdDate] = useState(new Date());

  const handleSelect = e => {
    setSelected(e.target.value);
  };

  const secHandleSelect = e => {
    setSecSelected(e.target.value);
  };

  useEffect(() => {
    setSelected(selectList[0]);
  }, []);

  useEffect(() => {
    console.log(`parents:   ${selected}`);
    const selectList2 = selectList.filter(item => item !== selected);
    setSecSelectList(selectList2);
  }, [selected]);

  return (
    <>
      <DashBoardTitleBox>
        <DashBoardTitle>대시보드</DashBoardTitle>
        <DatePicker>
          <Calendar setStDate={setStDate} setEdDate={setEdDate} />
        </DatePicker>
      </DashBoardTitleBox>
      <DashBoardContent>통합 광고 현황</DashBoardContent>
      <SelectContainer>
        <div>
          <select name="paramSelect" onChange={handleSelect}>
            {selectList.map(item => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <select name="paramSelect" onChange={secHandleSelect}>
            {secSelectList.map(item => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <select>
          <option>주간</option>
          <option>일간</option>
        </select>
      </SelectContainer>
      <div style={{ height: '300px' }}>
        <Test
          selected={selected}
          secSelected={secSelected}
          stDate={stDate}
          edDate={edDate}
        />
      </div>
    </>
  );
};

const DashBoardTitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const DashBoardTitle = styled.div`
  padding-top: 8rem;
  padding-left: 4rem;
  font-size: 2rem;
`;

const DatePicker = styled.div`
  padding-top: 8rem;
  padding-right: 4rem;
`;

const DashBoardContent = styled.div`
  padding-top: 4rem;
  padding-left: 4rem;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default DashBoard;
