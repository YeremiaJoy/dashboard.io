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
const usersDummy = [
  {
    id: "11f91d67-f937-4314-967c-a7f362ce94e4",
    name: "Sean Schumm",
    email: "Sarina.Willms@gmail.com",
    country_name: "Martinique",
    device_id: "b770264f-448d-4c20-9332-6504a86f271a",
    bitcoin_address: "3q1Pm6Q8tsDA2mGTRZoRonF6VSBEe16h",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/410.jpg",
    login_ip: "194.214.130.204",
    active_device_mac: "fa:32:e8:02:d0:1a",
    notes: "error modi omnis",
    age: 73,
    referral_id: 917,
    locale: "en_US",
    favorite_music: "Latin",
    phone_number: "679.418.0953 x0611",
    twitter_username: "Chaya.Kohler",
    job: "Administrator",
    invoice_email_address: "Carrie_Fadel17@yahoo.com",
    hmac_secret: "gikogoyiqebufudaroya",
    favorite_quote: "sit atque reiciendis",
    primary_color: "gold",
    secondary_color: "mint green",
    material: "Frozen",
    shipping_address: "3289 Rylan Via Apt. 084",
    zip_code: "56195-1016",
    latitude: "-52.0139",
    longitude: "-28.8896",
    favorite_animal: "fish",
    app_version: "270c4f6",
    timezone: "Australia/Adelaide",
  },
  {
    id: "3b44faab-e552-432e-b3bb-da7c0e949038",
    name: "Monique Erdman",
    email: "Jerrod14@yahoo.com",
    country_name: "Algeria",
    device_id: "4ecc6a02-05ba-481b-a608-1064b3a25992",
    bitcoin_address: "1HyNqeWqV1x93mF8PFtjTYkdj6vNkxg6",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/463.jpg",
    login_ip: "214.216.61.153",
    active_device_mac: "22:ca:79:02:c1:1f",
    notes: "aut illo vel",
    age: 57,
    referral_id: 289,
    locale: "pt_PT",
    favorite_music: "Soul",
    phone_number: "701-226-3063",
    twitter_username: "Darron_Fadel95",
    job: "Developer",
    invoice_email_address: "Reynold1@hotmail.com",
    hmac_secret: "tijereloqiruwutafora",
    favorite_quote: "sed voluptas quibusdam",
    primary_color: "violet",
    secondary_color: "yellow",
    material: "Bronze",
    shipping_address: "39711 Anderson Key Apt. 574",
    zip_code: "04747",
    latitude: "-34.3658",
    longitude: "-94.9511",
    favorite_animal: "bear",
    app_version: "7a13c9d",
    timezone: "America/Denver",
  },
];

function UsersDashboard({ users }) {
  const [value, setValue] = useState("");
  //get data for header
  const TableContent = Object.keys(users[0]);

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
            {users.map((val) => {
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
      </TableContainer>
    </TableDashboardContainer>
  );
}

export default UsersDashboard;
