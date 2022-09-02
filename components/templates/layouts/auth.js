import { Footer } from "@/components";

const AuthLayout = ({ children }) => {
  return (
    <section className="w-full">
      <section className="2xl:container mx-auto">
        {children}
        <Footer />
      </section>
    </section>
  );
};

export default AuthLayout;
