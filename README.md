## 배포링크

https://frabjous-frangipane-831c63.netlify.app/

## DatePicker

```jsx
// src/pages/Dashboard/DatePicker

const DatePicker = () => {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state) => state.period); //전역상태
  const [startDateValue, handleStartValueChange] = useInput(startDate); //컴포넌트state
  const [endDateValue, handleEndValueChange] = useInput(endDate); //컴포넌트state
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
```

- 캘린더에서 날짜를 고르면 컴포넌트의 state가 변경됩니다.
- 날짜 설정 후 go 버튼을 누르면 `periodSlice`(리덕스)로 기간이 전달됩니다.
- 전역상태에 설정된 날짜데이터가 화면에 표시됩니다.

## 통합 데이터 표시

```jsx
// src/pages/Dashboard/MetaList

const MetaList = () => {
  const dispatch = useDispatch();
  const { filteredData } = useSelector((state) => state.trendData);

  const [metaData, setMetaData] = useState({});

  useEffect(() => {
    dispatch(getTrendData());
  }, []);

  useEffect(() => {
    const metaObj = {
      클릭수: 0,
      광고비: 0,
      전환수: 0,
      노출수: 0,
      매출: 0,
      ROAS: 0,
    };
    filteredData.forEach((data) => {
      metaObj.클릭수 += data.click;
      metaObj.광고비 += data.cost;
      metaObj.전환수 += data.conv;
      metaObj.노출수 += (data.click / data.ctr) * 100;
      metaObj.매출 += (data.roas * data.cost) / 100;
    });
    metaObj.ROAS = (metaObj.매출 / metaObj.광고비) * 100;
    setMetaData({ ...metaObj });
  }, [filteredData]);

  return (
    <Ul>
      {Object.entries(metaData).map(([key, value]) => (
        <MetaListItem key={key} objectKey={key} value={value} />
      ))}
    </Ul>
  );
};

- `getTrendData`로 데이터를 받아와 `trendDataSlice`로 디스패치합니다.
- `periodSlice`에 설정된 기간에따라 `trendDataSlice`에 filtered 데이터가 저장되고 출력됩니다.
```
