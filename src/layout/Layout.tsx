import { Header } from "src/layout/Header";
import { Footer } from "src/layout/Footer";

export const Layout = (props: any) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
