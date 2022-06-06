import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import {
  DetailTable,
  TableBodyItem,
  TableDashboardContainer,
  TableHeadContainer,
  TableHeadItem,
} from "../styles/tableDashboard";
import {
  ChevronRightIcon,
  DragHandleIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";

//data dummy
const sellersDummy = [
  {
    id: 1,
    name: "Donnelly, Conn and Heller",
    sales_id: "69-4288071",
    item_id: 773,
    qty: 3,
    consumen_name: "Ana Fritsch",
    transaction_date: "2022-05-26T23:49:50.995Z",
  },
  {
    id: 2,
    name: "Satterfield - Kutch",
    sales_id: "23-3210672",
    item_id: 453,
    qty: 3,
    consumen_name: "Miriam Koepp",
    transaction_date: "2022-05-27T00:54:37.527Z",
  },
];

function SellersDashboard({ sellers }) {
  const [value, setValue] = useState("");
  //get data for header
  const TableContent = Object.keys(sellers[0]);

  return (
    <TableDashboardContainer>
      <TableContainer>
        <div>
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 5,
            }}
          >
            <TableHeadContainer>
              {/* get header from object key, so it will go dynamic if have any changes from backend */}
              {TableContent.map((val, i) => {
                return (
                  <TableHeadItem key={i}>
                    <div className="table-head-value">{val}</div>
                    <DragHandleIcon />
                  </TableHeadItem>
                );
              })}
            </TableHeadContainer>
          </div>
          <div>
            {/* Looping value of each header */}
            {sellers.map((val) => {
              return (
                <TableHeadContainer key={val.id}>
                  {TableContent.map((table, i) => {
                    return (
                      <TableBodyItem key={i}>
                        <span>{val[table]}</span>
                        {/* if value clicked same with val[table] then show it */}
                        {value === val[table] && (
                          <DetailTable show={value}>
                            <div className="detail-table-value">{value}</div>
                            <SmallCloseIcon onClick={() => setValue("")} />
                          </DetailTable>
                        )}
                        <ChevronRightIcon
                          w={4}
                          h={4}
                          onClick={() => {
                            setValue(val[table]);
                          }}
                        />
                      </TableBodyItem>
                    );
                  })}
                </TableHeadContainer>
              );
            })}
          </div>
        </div>
        {/* <Table variant="simple">
          <Thead>
            <Tr>
              {Object.keys(sellers[0]).map((val, i) => {
                return <Th key={i}>{val}</Th>;
              })}
            </Tr>
          </Thead>
          <Tbody>
            {sellers.map((val) => {
              return (
                <Tr key={val.id}>
                  {Object.keys(sellers[0]).map((table, i) => {
                    return <Td key={i}>{val[table]}</Td>;
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table> */}
      </TableContainer>
    </TableDashboardContainer>
  );
}

export default SellersDashboard;
