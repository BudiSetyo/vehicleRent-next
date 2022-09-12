import { AuthLayout, Buttons, Inputs } from "@/components";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();

  const handleNavigate = (href) => {
    return router.push(href);
  };
  return (
    <AuthLayout>
      <section className="bg-third bg-cover bg-center">
        <section className="bg-wrap-opacity">
          <section className="max-w-screen-xl mx-auto flex md:flex-row flex-col md:justify-between md:py-28 md:px-20 px-10 py-12 ">
            <div className="w-full">
              <h1 className="md:max-w-sm text-6xl text-white font-bold">
                Le’ts Explore The World
              </h1>

              <div className="md:block hidden">
                <p className="mt-12 text-lg text-white font-bold">
                  Don’t have account?
                </p>

                <Buttons
                  className="mt-8 py-4 md:max-w-sm w-full"
                  color="#393939"
                  text="Sign Up"
                  textColor="crayola-orange"
                  textEdit="text-xl font-bold"
                  onClick={() => {
                    handleNavigate("/signUp");
                  }}
                />
              </div>
            </div>

            <div className="lg:w-full mx-8 md:block hidden">
              <div className="mx-auto rounded-full w-6 h-6 bg-white" />
              <div className="mx-auto w-1 h-full bg-white" />
              <div className="mx-auto rounded-full w-6 h-6 bg-white" />
            </div>

            <div className="w-full md:my-auto pt-8">
              <div>
                <Inputs
                  className="md:max-w-sm mt-6"
                  placeHolder="Email"
                  placeHolderColor="#FFF"
                  textColor="#FFF"
                  size="lg"
                  fontWeight="md"
                />

                <Inputs
                  className="md:max-w-sm mt-6"
                  placeHolder="Password"
                  placeHolderColor="#FFF"
                  textColor="#FFF"
                  size="lg"
                  fontWeight="md"
                  type="password"
                />

                <Button
                  variant="unstyled"
                  onClick={() => {
                    return handleNavigate("/forgotPassword");
                  }}
                >
                  <p className="text-white underline">Forgot password?</p>
                </Button>
              </div>

              <div>
                <Buttons
                  className="mt-8 py-4 md:max-w-sm w-full"
                  text="Sign In"
                  textColor="onyx-black"
                  textEdit="text-xl font-bold"
                />
              </div>

              <div className="md:hidden">
                <p className="mt-12 text-lg text-white font-bold">
                  Don’t have account?
                </p>

                <Buttons
                  className="mt-8 py-4 md:max-w-sm w-full"
                  color="#393939"
                  text="Sign Up"
                  textColor="crayola-orange"
                  textEdit="text-xl font-bold"
                />
              </div>
            </div>
          </section>
        </section>
      </section>
    </AuthLayout>
  );
};

export default SignIn;
