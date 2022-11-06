# Week 2-2. 광고현황 대시보드 및 광고관리 서비스

<br />

1. [팀 소개 👫](#1-팀-소개-)
2. [프로젝트 소개 🚀](#2-프로젝트-소개-)
3. [기술 스택 🛠](#3-기술-스택-)
4. [구현 기능 📍](#4-구현-기능-)
5. [프로젝트 구조 🗂](#5-프로젝트-구조-)
6. [Best Practice 선정과정👩‍👦‍👦](#6-best-practice-선정과정)
7. [프로젝트 설치 및 실행 ✨](#7-프로젝트-설치-및-실행-)  

<br/>

- [🌍 배포 링크](https://frabjous-frangipane-831c63.netlify.app/)
- [📄 팀 노션](https://plain-airboat-3f4.notion.site/10-27-Todo-f9fb2a1265e54c33b0b73c306c230042)

<br />



## 1. 팀 소개 👫

- [이빛나 (팀장)](https://github.com/bitnaleeeee)
- [모상빈](https://github.com/Topbin2)
- [김진석](https://github.com/genuine-seok)
- [박우빈](https://github.com/Debonchocola)
- [이의연](https://github.com/strongpond)
- [조성호](https://github.com/CSH111)
- [전대원](https://github.com/eodnjs467)

<br />

## 2. 프로젝트 소개 🚀

- 개요 : 원티드 프론트엔드 프리온보딩 7기 2팀 과제 2-2 중 Best Practice
- 주제 : 광고현황 대시보드 및 광고관리 서비스
- 기간 : 2022.11.05 ~ 2022.11.06

<br />


## 3. 기술 스택 🛠

- React
- redux-toolkit
- Recharts
- Styled-Components

<br />

## 4. 구현 기능 📍


- 구현사항
  - 대시보드 datePicker, 기간 필터
  - 대시보드 통합광고 현황
  - 대시보드 차트
  - 대시보드 지표별 필터
  - 페이지 이동시 상태유지

<br />

## 5. 프로젝트 구조 🗂

```bash
src
├── components  // 공용 컴포넌트
├── constants  // 상수
├── hooks  // hooks
├── pages // 페이지 및 페이지별 컴포넌트
├── store // 리덕스 툴킷 전역상태관리
└── utils // dateformatting 등 유틸 함수
```

<br/>


## 6. Best Practice 선정과정👩‍👦‍👦

### DatePicker

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

<br>

### 통합 데이터 표시

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

## 7. 프로젝트 설치 및 실행 ✨

<br/>

1. Git Clone

```plaintext
$ git clone git@github.com:pre-onboading-2team/pre-onboarding-7th-2-2-2.git
```

2. 프로젝트 패키지 설치

```plaintext
$ npm install
```

3. 프로젝트 실행

```plaintext
$ npm start
```










