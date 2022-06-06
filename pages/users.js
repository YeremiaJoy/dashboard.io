import axios from "axios";
import { useContext, useEffect } from "react";
import MainLayout from "../containers/layouts/main";
import UsersDashboard from "../containers/usersDashboard";
import { userContext } from "./_app";

export const getServerSideProps = async () => {
  const user = await axios.get("https://delman-fe-api.fly.dev/users");
  return {
    props: {
      users: user.data.data,
    },
  };
};

function Users({ users }) {
  const { setUsers } = useContext(userContext);

  useEffect(() => {
    //set user to context so we can use the state globally for search, user dashboard, etc
    setUsers(users);
  }, [setUsers, users]);

  return (
    <MainLayout
      headProps={{ title: "Dashboard | List of Users" }}
      header={{ title: "Users Data", desc: "List of Users Data" }}
    >
      <UsersDashboard users={users} />
    </MainLayout>
  );
}

export default Users;
