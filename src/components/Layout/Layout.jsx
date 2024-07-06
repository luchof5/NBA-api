import Footer from "../Footer/Footer.jsx"
import Header from "../Header/Header.jsx"
import Main from "../Main/Main.jsx"

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
