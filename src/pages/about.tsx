import { About } from "@/components/page/about";
import { AboutLayout } from "@/components/layout/AboutLayout";

const AboutPage = () => {
  return <About />;
};

AboutPage.getLayout = AboutLayout;

export default AboutPage;
