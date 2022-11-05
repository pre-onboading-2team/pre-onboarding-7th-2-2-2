/* eslint-disable arrow-parens */
/* eslint-disable default-case */
/* eslint-disable react/jsx-one-expression-per-line */
import styled from 'styled-components';

const DataItem = ({ key, data }) => {
  const Budget = [data.budget];
  const BudgetFormat = Budget.toString()
    .split('')
    .splice(0, Budget.toString().length - 4);
  const Sales = [data.report.convValue];
  const SalesFormat = Sales.toString()
    .split('')
    .splice(0, Sales.toString().length - 4);
  const Cost = [data.report.cost];
  const CostFormat = Cost.toString()
    .split('')
    .splice(0, Sales.toString().length - 4);

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
        <div>{BudgetFormat}만원</div>
      </DataBody>
      <DataBody>
        <div>광고 수익률{data.report.roas}%</div>
      </DataBody>

      <DataBody>
        <span>매출</span>
        <div>
          {SalesFormat}
          만원
        </div>
      </DataBody>
      <DataBody>
        <span>광고비용</span>
        <div>
          {CostFormat}
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
