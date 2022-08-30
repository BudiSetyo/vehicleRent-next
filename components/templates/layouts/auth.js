import { Footer } from "@/components";

const AuthLayout = ({ children }) => {
  return (
    <section className="container mx-auto">
      {children}
      <Footer />
    </section>
  );
};

export default AuthLayout;
