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
        <section className="flex md:flex-row flex-col md:justify-between md:py-28 md:px-32 px-16 py-12 bg-wrap-opacity">
          <div>
            <h1 className="md:max-w-sm text-6xl text-white font-bold">
              Le’ts Explore The World
            </h1>

            <div className="md:block hidden">
              <p className="mt-12 text-lg text-white font-bold">
                Don’t have account?
              </p>

              <Buttons
                className="mt-8 py-4 max-w-sm w-full"
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

          <div className="mx-8 md:block hidden">
            <div className="rounded-full w-6 h-6 bg-white" />
            <div className="mx-auto w-1 h-full bg-white" />
            <div className="rounded-full w-6 h-6 bg-white" />
          </div>

          <div className="md:my-auto mt-8">
            <div className="">
              <Inputs
                className="md:max-w-sm"
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
            </div>

            <Button variant="unstyled">
              <p className="text-white underline">Forgot password?</p>
            </Button>

            <div>
              <Buttons
                className="mt-8 py-4 md:max-w-sm w-full"
                text="Login"
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
    </AuthLayout>
  );
};

export default SignIn;
