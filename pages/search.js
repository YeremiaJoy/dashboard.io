import axios from "axios";
import { useContext, useEffect } from "react";
import MainLayout from "../containers/layouts/main";
import SearchUser from "../containers/searchUser";
import { userContext } from "./_app";

export const getServerSideProps = async () => {
  const user = await axios.get("https://delman-fe-api.fly.dev/users");
  return {
    props: {
      users: user.data.data,
    },
  };
};

function Search({ users }) {
  const { setUsers } = useContext(userContext);

  useEffect(() => {
    //set user to context so we can use the state globally for search, user dashboard, etc
    //I put SSR to this route, to handle if someone goes direct to this route, before they visit default route "/"
    setUsers(users);
  }, [users, setUsers]);

  return (
    <MainLayout
      headProps={{ title: "Search | Search User" }}
      header={{ title: "Search User", desc: "Search existing user" }}
    >
      <SearchUser />
    </MainLayout>
  );
}

export default Search;
