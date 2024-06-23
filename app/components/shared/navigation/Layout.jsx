const { default: Footer } = require("./Footer");
const { default: Navbar } = require("./Navbar");

const Layout = ({ children }) => (
  <div className="overflow-hidden">
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;