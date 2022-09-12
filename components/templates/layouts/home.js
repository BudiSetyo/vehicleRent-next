import { Navbar, Footer, Cover } from "@/components";
import { useRouter } from "next/router";

const HomeLayout = ({ children }) => {
  const router = useRouter();

  return (
    <section className="w-full">
      <section className="2xl:container mx-auto relative top-20 mx-auto">
        <Navbar
          active={
            router.pathname.split("/")[1] === ""
              ? "home"
              : router.pathname.split("/")[1] === "vehicleType"
              ? "vehicle type"
              : router.pathname.split("/")[1]
          }
        />
        <Cover />
        <section className="max-w-screen-xl mx-auto">{children}</section>
        <Footer />
      </section>
    </section>
  );
};

export default HomeLayout;
