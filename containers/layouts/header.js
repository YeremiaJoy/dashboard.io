import Link from "next/link";
import React from "react";
import { Navbar } from "../../styles/layouts";

function Header() {
  return (
    <Navbar>
      <Link href="/">
        <a>dashboard.io</a>
      </Link>
    </Navbar>
  );
}

export default Header;
