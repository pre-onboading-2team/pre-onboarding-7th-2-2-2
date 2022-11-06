import { useDispatch } from "react-redux";

import { changefilter } from "../../../../store/chartFilter";
const ChartFilter = ({
  tagFilterEntries,
  rightFilterEntries,
  leftFilterEntries,
}) => {
  const dispatch = useDispatch();

  const handleLeftChange = (e) => {
    const entry = tagFilterEntries.find(
      ([dataKey]) => dataKey === e.target.value
    );
    // setLeftTagEntries(entry);
    dispatch(changefilter({ leftFilterEntries: entry }));
  };

  const handleRightChange = (e) => {
    const entry = tagFilterEntries.find(
      ([dataKey]) => dataKey === e.target.value
    );
    // setRightTagEntries(entry);
    dispatch(changefilter({ rightFilterEntries: entry }));
  };

  return (
    <div>
      <select
        name=""
        id=""
        value={leftFilterEntries[0]}
        onChange={handleLeftChange}
      >
        {tagFilterEntries.map(([dataKey, tag]) => (
          <option key={dataKey} value={dataKey} name={tag}>
            {tag}
          </option>
        ))}
      </select>

      <select
        name=""
        id=""
        value={rightFilterEntries[0]}
        onChange={handleRightChange}
      >
        {tagFilterEntries.map(([dataKey, tag]) => (
          <option key={dataKey} value={dataKey}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChartFilter;
