import Footer from "./footer";
import Navbar from "./Navbar";
import paths from "./paths";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar path={paths} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;