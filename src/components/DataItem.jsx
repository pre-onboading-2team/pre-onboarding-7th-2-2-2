/* eslint-disable arrow-parens */
/* eslint-disable default-case */
/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const DataItem = ({ key, data }) => {
  const [financeData, setFinanceData] = useState(data);
  const DigitComma = a => {
    return a.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  useEffect(() => {
    const BudgetFormat = DigitComma(
      Math.floor(financeData.budget / 10000).toString()
    );
    const SalesFormat = DigitComma(
      Math.floor(financeData.report.convValue / 10000).toString()
    );

    const CostFormat = DigitComma(
      Math.floor(financeData.report.cost / 10000).toString()
    );

    setFinanceData({
      ...financeData,
      BudgetFormat,
      SalesFormat,
      CostFormat,
    });
  }, []);

  const statusChange = data.status.replace(/(active|ended)/g, v => {
    switch (v) {
      case 'active':
        return '진행중';
      case 'ended':
        return '중단됨';
    }
  });

  return (
    <DataItemContainer>
      <DataTitle>{data.title}</DataTitle>
      <DataBody>
        <div>상태</div>
        <div>{statusChange}</div>
      </DataBody>
      <DataBody>
        <div>광고 생성일</div>
        <div>{data.startDate.toString().substr(0, 10)}</div>
      </DataBody>
      <DataBody>
        <span>일 희망 예산</span>
        <div>{financeData.BudgetFormat}만원</div>
      </DataBody>
      <DataBody>
        <div>광고 수익률{data.report.roas}%</div>
      </DataBody>

      <DataBody>
        <span>매출</span>
        <div>
          {financeData.SalesFormat}
          만원
        </div>
      </DataBody>
      <DataBody>
        <span>광고비용</span>
        <div>
          {financeData.CostFormat}
          만원
        </div>
      </DataBody>
      <DataItemBtn>
        <button type="button">수정하기</button>
      </DataItemBtn>
    </DataItemContainer>
  );
};

const DataItemContainer = styled.div`
  border: 1px solid #d1d8dc;
  border-radius: 10px;
  padding: 2rem;
`;

const DataTitle = styled.div`
  border-bottom: 1px solid #edeff1;
  padding: 2rem 1rem;
  font-weight: bold;
  font-size: 1.2rem;
`;
const DataItemBtn = styled.div`
  padding-top: 2rem;
  button {
    border: 1px solid #d1d8dc;
    border-radius: 10px;
    padding: 1rem;
  }
`;

const DataBody = styled.div`
  padding: 1rem 1rem 0;
`;
export default DataItem;
