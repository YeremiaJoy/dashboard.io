import React from "react";
import { SidebarContainer, SiderHeader } from "../../styles/layouts";
import MainHead from "./head";
import MainHeader from "./header";
import Sidebar from "./sidebar";
import { useRouter } from "next/router";

const MainLayout = ({ headProps = {}, header = {}, children }) => {
  const router = useRouter();
  const style = { width: "100%", position: "relative" };

  return (
    <>
      <MainHead {...headProps} />
      {/* main header "delman.io" */}
      <MainHeader />
      {/* sidebar + header */}
      <SidebarContainer className="root">
        {/* sidebar left side */}
        <Sidebar />
        {/* sidebar right side */}
        {/* search route doesn't need position relative */}
        <div style={router.pathname !== "/search" ? style : {}}>
          <SiderHeader>
            <h2>{header.title}</h2>
            <p>{header.desc}</p>
          </SiderHeader>
          <div style={{ padding: "16px" }}>{children}</div>
        </div>
      </SidebarContainer>
    </>
  );
};

export default MainLayout;
