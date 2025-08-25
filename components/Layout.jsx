import Navbar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;