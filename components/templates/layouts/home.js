import { Navbar, Footer, Cover } from "@/components";

const HomeLayout = ({ children }) => {
  return (
    <section className="w-full">
      <section className="2xl:container mx-auto relative top-20 mx-auto">
        <Navbar />
        <Cover />
        {children}
        <Footer />
      </section>
    </section>
  );
};

export default HomeLayout;
