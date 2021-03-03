import Header from "../Header";
import Footer from "../Footer";
import NavBar from "../Navigation";

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <Header />
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
