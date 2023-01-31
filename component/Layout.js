import Navbar from "component/Navbar";
import ActiveResource from "component/activeResource";


const Layout = ({children}) =>
    <>
      <Navbar />
      <ActiveResource />
      { children }
    </>


export default Layout;