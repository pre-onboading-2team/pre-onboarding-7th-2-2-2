/* eslint-disable arrow-parens */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import DataItem from './DataItem';
import TitleBox from './TitleBox';
/* eslint-disable no-unused-expressions */
const ADManagement = () => {
  const [filtered, setFiltered] = useState([]);
  const ListData = [
    {
      id: 1,
      adType: 'web',
      title: '매드업 레버 광고 1234',
      budget: 500000,
      status: 'active',
      startDate: '2020-10-19T00:00:00',
      endDate: null,
      report: {
        cost: 267144117,
        convValue: 1157942685,
        roas: 433,
      },
    },
    {
      id: 2,
      adType: 'web',
      title: '매드업 레버 광고 12345',
      budget: 200000,
      status: 'ended',
      startDate: '2021-01-22T00:00:00',
      endDate: '2021-12-21T23:59:59',
      report: {
        cost: 169837362,
        convValue: 745438798,
        roas: 438,
      },
    },
    {
      id: 3,
      adType: 'web',
      title: '원티드 레버 광고 1234',
      budget: 150000,
      status: 'active',
      startDate: '2022-01-01T00:00:00',
      endDate: null,
      report: {
        cost: 699481243,
        convValue: 898716259,
        roas: 1284,
      },
    },
    {
      id: 4,
      adType: 'app',
      title: '매드업 앱광고 광고 9912',
      budget: 240000,
      status: 'active',
      startDate: '2022-02-10T00:00:00',
      endDate: null,
      report: {
        cost: 9300222,
        convValue: 38234789,
        roas: 411,
      },
    },
  ];

  const handleFilter = e => {
    if (e.target.value === '전체광고') {
      setFiltered(ListData);
    } else {
      setFiltered(ListData.filter(item => item.status === e.target.value));
    }
  };

  useEffect(() => {
    setFiltered(ListData);
  }, []);

  return (
    <ADContainer>
      <TitleBox name="광고관리" />
      <SelectContainer>
        <select name="adState" onChange={handleFilter}>
          <option value="전체광고">전체 광고</option>
          <option value="active">진행중</option>
          <option value="ended">중단됨</option>
        </select>

        <button type="button">광고 만들기</button>
      </SelectContainer>
      <DataItemBox>
        {filtered.map((v, i) => (
          <div>
            <DataItem key={i} data={v} />
          </div>
        ))}
      </DataItemBox>
    </ADContainer>
  );
};

const ADContainer = styled.div``;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  select {
    padding: 1rem;
    border: 1px solid #d1d8dc;
    border-radius: 10px;
  }
  button {
    border-radius: 10px;
    background-color: #586cf5;
    padding: 1rem;
    color: white;
    font-weight: bold;
  }
`;

const DataItemBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;

  div {
    padding: 1rem;
  }
`;

export default ADManagement;
