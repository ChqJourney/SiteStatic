import { Footer } from "./footer";
import Header from "./header";

function Layout({ children,menus }) {
  
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header menus={menus}/>
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
