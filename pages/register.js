import MainLayout from "../containers/layouts/main";
import RegisterUser from "../containers/register";

function Register() {
  return (
    <MainLayout
      headProps={{ title: "Register | Add new User" }}
      header={{ title: "User Registration", desc: "Add new User" }}
    >
      <RegisterUser />
    </MainLayout>
  );
}

export default Register;
