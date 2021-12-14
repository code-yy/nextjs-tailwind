import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = (props: any) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
