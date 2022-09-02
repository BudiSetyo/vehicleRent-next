import { Navbar, Footer } from "@/components";

const MainLayout = ({ children }) => {
  return (
    <section className="w-full">
      <section className="2xl:container absolute top-20 mx-auto">
        <Navbar />
        {children}
        <Footer />
      </section>
    </section>
  );
};

export default MainLayout;
