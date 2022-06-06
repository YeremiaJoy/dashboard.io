import styled from "@emotion/styled";

export const TableDashboardContainer = styled.div`
  height: 700px;
  .chakra-table__container {
    overflow: scroll;
    width: 97%;
    max-height: 700px;
    position: absolute;
  }
  table thead tr th {
    background-color: #f6f6f9;
    border: 1px solid #e2e8f0;
    color: #000;
    font-size: 14px;
    text-transform: lowercase;
    text-align: center;
    height: 30px;
    padding: 0 16px;
    span {
      display: flex;
      width: 80%;
    }
    .chakra-icon {
      display: flex;
    }
  }
  table tbody tr td {
    border: 1px solid #e2e8f0;
    height: 30px;
    padding: 0 16px;
  }
`;

export const TableHeadContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
`;
export const TableHeadItem = styled.div`
  height: inherit;
  border-top: 1px solid rgb(208, 214, 220);
  border-bottom: 1px solid rgb(208, 214, 220);
  border-right: 1px solid rgb(208, 214, 220);
  min-width: 150px;
  max-width: 300px;
  background: rgb(246, 247, 250);
  font-size: 14px;
  font-weight: 600;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:first-of-type {
    border-left: 1px solid rgb(208, 214, 220);
  }
  .table-head-value {
    text-align: center;
    width: 85%;
  }
  .chakra-icon {
    cursor: col-resize;
    color: var(--color-grey);
  }
`;
export const TableBodyItem = styled.div`
  height: inherit;
  border-right: 1px solid rgb(208, 214, 220);
  border-bottom: 1px solid rgb(208, 214, 220);
  width: 150px;
  min-width: 150px;
  background: #fff;
  font-size: 14px;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: relative;
  &:first-of-type {
    border-left: 1px solid rgb(208, 214, 220);
  }
  span {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 96%;
  }
  .chakra-icon {
    right: 5px;
    background-color: rgb(159, 169, 178);
    color: #fff;
    border-radius: 50%;
    position: absolute;
    &:hover {
      cursor: pointer;
      opacity: 50%;
    }
  }
`;
export const DetailTable = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props.show ? "flex" : "none")};
  height: 100%;
  width: 100%;
  border: 1px solid var(--color-blue);
  padding: 0 10px;
  height: 150px;
  white-space: pre-wrap;
  background: #fff;
  z-index: 80;
  .chakra-icon {
    margin-top: 5px;
  }
`;
