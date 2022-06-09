import React, { createContext, forwardRef, useState } from "react";
import { DetailTable, TableDashboardContainer } from "../styles/tableDashboard";
import {
  ChevronRightIcon,
  DragHandleIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";
import { FixedSizeGrid as Grid } from "react-window";

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
  const tableContent = Object.keys(sellers[0]);
  const tableCount = Object.keys(sellers).length;

  const StickyListContext = createContext();
  StickyListContext.displayName = "StickyListContext";

  const ItemWrapper = ({ data, columnIndex, rowIndex, style }) => {
    const { ItemRenderer, stickyIndices } = data;
    if (
      stickyIndices &&
      stickyIndices.includes(columnIndex) &&
      stickyIndices.includes(rowIndex)
    ) {
      return null;
    }
    return (
      <ItemRenderer
        columnIndex={columnIndex}
        rowIndex={rowIndex}
        style={style}
      />
    );
  };

  const StickyRow = ({ style }) => (
    <div className="sticky table" style={style}>
      {tableContent.map((val, i) => {
        return (
          <div className="table-header table-value" key={i}>
            {val}
          </div>
        );
      })}
    </div>
  );

  const Row = ({ columnIndex, rowIndex, style }) => {
    const header = tableContent[columnIndex];
    const tableValue =
      rowIndex > 0 && sellers[rowIndex - 1][tableContent[columnIndex]];
    return (
      <>
        {rowIndex > 0 && (
          <div
            className={
              header === "id" || header === "item_id" || header === "qty"
                ? "left table"
                : "table"
            }
            style={style}
          >
            <div className="table-value">
              {tableValue}
              {value === tableValue && (
                <DetailTable show={value}>
                  <div className="detail-table-value">{value}</div>
                  <SmallCloseIcon onClick={() => setValue("")} />
                </DetailTable>
              )}
              {tableValue.length > 14 && (
                <ChevronRightIcon
                  w={4}
                  h={4}
                  onClick={() => {
                    setValue(tableValue);
                  }}
                />
              )}
            </div>
          </div>
        )}
      </>
    );
  };

  const innerElementType = forwardRef(({ children, ...rest }, ref) => (
    <StickyListContext.Consumer>
      {({ stickyIndices }) => (
        <div ref={ref} {...rest}>
          {stickyIndices.map((columnIndex) => (
            <StickyRow
              columnIndex={columnIndex}
              key={columnIndex}
              style={{
                top: columnIndex * 35,
                left: 0,
                width: "100%",
                height: 30,
              }}
            />
          ))}

          {children}
        </div>
      )}
    </StickyListContext.Consumer>
  ));

  const StickyList = ({ children, stickyIndices, ...rest }) => (
    <StickyListContext.Provider
      value={{ ItemRenderer: children, stickyIndices }}
    >
      <Grid itemData={{ ItemRenderer: children, stickyIndices }} {...rest}>
        {ItemWrapper}
      </Grid>
    </StickyListContext.Provider>
  );

  return (
    <TableDashboardContainer>
      <StickyList
        className="table-container"
        height={700}
        innerElementType={innerElementType}
        columnCount={tableContent.length}
        columnWidth={150}
        // +1 means => add 1 row for header
        rowCount={tableCount + 1}
        rowHeight={30}
        //only render once rows for header
        stickyIndices={[0]}
        //width responsive will handle in classname table-container css
        width={1000}
      >
        {Row}
      </StickyList>
    </TableDashboardContainer>
  );
}

export default SellersDashboard;

//STICKY HEADER REFERENCE FROM codesandbox down below
//https://codesandbox.io/s/0mk3qwpl4l?file=/src/index.js:521-524
