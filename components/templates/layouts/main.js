import { Navbar, Footer } from "@/components";

const MainLayout = ({ children }) => {
  return (
    <section className="container mx-auto">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default MainLayout;
