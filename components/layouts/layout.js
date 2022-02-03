
import GetAuthWrapper from "../wrapper/getAuthWrapper";
import { Footer } from "./footer";
import Header from "./header";

function Layout({ children, menus }) {
  return (
    <>
      <Header menus={menus} />
      <main className=" min-h-min">{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
