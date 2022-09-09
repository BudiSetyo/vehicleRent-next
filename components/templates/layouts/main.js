import { Navbar, Footer } from "@/components";
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {
  const router = useRouter();

  return (
    <section className="w-full">
      <section className="2xl:container mx-auto relative top-20 mx-auto">
        <Navbar
          active={
            router.pathname.split("/")[1] === "vehicleType"
              ? "vehicle type"
              : router.pathname.split("/")[1]
          }
        />
        {children}
        <Footer />
      </section>
    </section>
  );
};

export default MainLayout;
