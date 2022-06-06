import { useRouter } from "next/router";
import React from "react";
import { NotFoundContainer, NotFoundDesc, NotFoundTitle } from "../styles/404";

function NotFound() {
  const router = useRouter();
  return (
    <NotFoundContainer>
      <NotFoundTitle>dashboard.io</NotFoundTitle>
      <NotFoundDesc>
        <h2>Oops, We couldn't find that page</h2>
        <p>It seems the URL you’re looking for doesn’t exist.</p>
        <div className="back-to-home" onClick={() => router.push("/")}>
          Back to Home
        </div>
      </NotFoundDesc>
    </NotFoundContainer>
  );
}

export default NotFound;
