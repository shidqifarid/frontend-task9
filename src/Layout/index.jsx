import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Layout({children}) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;