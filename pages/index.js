import axios from "axios";
import MainLayout from "../containers/layouts/main";
import SellerDashboard from "../containers/sellersDashboard";

export const getServerSideProps = async () => {
  const seller = await axios.get("https://delman-fe-api.fly.dev/");
  return {
    props: {
      sellers: seller.data.data,
    },
  };
};

export default function Home({ sellers }) {
  return (
    <MainLayout
      headProps={{ title: "Dashboard | Sales Data" }}
      header={{ title: "Sales Dashboard", desc: "List of Sales Data" }}
    >
      <SellerDashboard sellers={sellers} />
    </MainLayout>
  );
}
