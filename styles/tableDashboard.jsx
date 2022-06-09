import styled from "@emotion/styled";

export const TableDashboardContainer = styled.div`
  height: 700px;
  border: 1px solid rgb(208, 214, 220);
  position: relative;
  .left {
    text-align: end;
  }
  .table-container {
    position: absolute !important;
    width: 100% !important;
  }
  .table {
    border-right: 1px solid rgb(208, 214, 220);
    border-bottom: 1px solid rgb(208, 214, 220);
    background: #fff;
    font-size: 14px;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    display: flex;
    align-items: center;
  }
  .table-header {
    border-left: 1px solid rgb(208, 214, 220);
    height: 30px;
    padding: 0 10px;
    width: 150px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky !important;
    background-color: #f6f6f9;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    &:first-of-type {
      border-left: none;
    }
  }
  .table-value {
    padding: 0 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 96%;
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
  }
  .sticky {
    position: sticky !important;
    position: -webkit-sticky !important;
    background-color: #f6f6f9;
    z-index: 2;
  }
  .row,
  .sticky {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
  }
`;
export const DetailTable = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props.show ? "flex" : "none")};
  width: 100%;
  border: 1px solid var(--color-blue);
  padding: 0 10px;
  height: 150px;
  background: #fff;
  z-index: 80;
  .detail-table-value {
    width: 95%;
    white-space: pre-wrap;
  }
  .chakra-icon {
    margin-top: 5px;
  }
`;
