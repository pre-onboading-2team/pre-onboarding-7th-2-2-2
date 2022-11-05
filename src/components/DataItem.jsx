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

  return (
    <DataItemContainer>
      <DataTitle>{data.title}</DataTitle>
      <DataBody>
        <div>상태</div>
        <div>{data.status}</div>
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
      <DataItemBtn type="button">수정하기</DataItemBtn>
    </DataItemContainer>
  );
};

const DataItemContainer = styled.div`
  border-radius: 5px;
`;

const DataTitle = styled.div`
  font-weight: bold;
`;
const DataItemBtn = styled.button`
  padding-top: 2rem;
`;

const DataBody = styled.div`
  display: flex;
`;
export default DataItem;
