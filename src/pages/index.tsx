import { Index } from "@/components/page/index";
import { HomeLayout } from "@/components/layout/HomeLayout";

const HomePage = () => {
  return <Index />;
};

HomePage.getLayout = HomeLayout;

export default HomePage;
