const { default: Footer } = require("./Footer");
const { default: Navbar } = require("./Navbar");

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
