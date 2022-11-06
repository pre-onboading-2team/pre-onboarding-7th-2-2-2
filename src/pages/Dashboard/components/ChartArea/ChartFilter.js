const ChartFilter = ({
  tagFilterEntries,
  setLeftTagEntries,
  setRightTagEntries,
  leftTagEntries,
  rightTagEntries,
}) => {
  const handleLeftChange = (e) => {
    const entry = tagFilterEntries.find(
      ([dataKey]) => dataKey === e.target.value
    );
    setLeftTagEntries(entry);
  };

  const handleRightChange = (e) => {
    const entry = tagFilterEntries.find(
      ([dataKey]) => dataKey === e.target.value
    );
    setRightTagEntries(entry);
  };

  return (
    <div>
      <select
        name=""
        id=""
        value={leftTagEntries[0]}
        onChange={handleLeftChange}
      >
        {tagFilterEntries.map(([dataKey, tag]) => (
          <option key={dataKey} value={[dataKey]}>
            {tag}
          </option>
        ))}
      </select>

      <select
        name=""
        id=""
        value={rightTagEntries[0]}
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
