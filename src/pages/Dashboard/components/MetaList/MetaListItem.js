import styled from "styled-components";

import formatMetaData from "../../../../utils/formatMetaData";

const Li = styled.li`
  display: flex;
  flex-direction: column;
  border: solid black 1px;
  border-radius: 10px;
  padding: 10px;
  .key {
    font-size: 12px;
    margin: 5px;
  }
  .value {
    font-size: 16px;
    margin: 5px;
  }
`;

const MetaListItem = ({ objectKey, value }) => {
  return (
    <Li>
      <div className="key">{objectKey}</div>
      <div className="value">{formatMetaData(objectKey, value)}</div>
    </Li>
  );
};

export default MetaListItem;
