import { Footer } from "./footer";
import { Header } from "./header";



export default function Layout({ children }) {
  return (
    <>
      <Header/>
      <main className=" min-h-min">{children}</main>
      <Footer/>
    </>
  )
}