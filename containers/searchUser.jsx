import { Search2Icon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import UserDetail from "../components/userDetail";
import { userContext } from "../pages/_app";
import { SearchContainer, SearchResultContainer } from "../styles/search";

function SearchUser() {
  const [searchValue, setSearchValue] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const { users } = useContext(userContext);

  useEffect(() => {
    //find user based on email search value
    setUserDetails(users?.find((val) => val.email === searchValue));
    //if userdetails is not found, close the popup details
    if (!userDetails) setShowDetail(false);
  }, [searchValue, userDetails]);

  return (
    <SearchContainer>
      {/* search input */}
      <div>
        <InputGroup>
          <InputLeftElement
            className="InputLeft"
            pointerEvents="none"
            children={<Search2Icon color="gray.400" />}
            size="xs"
          />
          <Input
            type="text"
            placeholder="Search by email"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {searchValue && (
            <InputRightElement className="InputLeft" size="xs">
              <SmallCloseIcon
                w={3}
                h={3}
                className="clear-search-btn"
                color="gray.400"
                onClick={() => setSearchValue("")}
              />
            </InputRightElement>
          )}
        </InputGroup>
        {/* search result container */}
        <SearchResultContainer found={userDetails}>
          {userDetails ? (
            <div className="result">
              <h2>{userDetails.name}</h2>
              <p>{userDetails.email}</p>
              <div className="line"></div>
              <Button onClick={() => setShowDetail(!showDetail)}>
                View User Profile
              </Button>
            </div>
          ) : (
            <div className="result">
              <h2>No result was found</h2>
              <p>Please try again with different email</p>
            </div>
          )}
        </SearchResultContainer>
      </div>

      {/* user details popup */}
      <UserDetail
        data={userDetails}
        showDetail={showDetail}
        toggleShow={() => setShowDetail(!showDetail)}
      />
    </SearchContainer>
  );
}

export default SearchUser;
