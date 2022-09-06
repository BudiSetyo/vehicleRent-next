import { AuthLayout, Buttons, Inputs } from "@/components";
import { Box, Button, Icon } from "@chakra-ui/react";
import { FaAngleLeft } from "react-icons/fa";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const router = useRouter();

  const handleBack = () => {
    return router.back();
  };
  return (
    <AuthLayout>
      <section className="bg-third bg-cover bg-center">
        <section className="md:py-10 md:px-20 py-5 px-10 bg-wrap-opacity">
          <div>
            <Box
              as="button"
              className="flex items-center"
              onClick={() => handleBack()}
            >
              <Icon as={FaAngleLeft} color="#FFF" h={7} w={7} />
              <p className="text-white text-lg ml-5">Back</p>
            </Box>
          </div>

          <section className="mt-8 flex flex-col items-center">
            <h1 className="md:text-6xl text-4xl text-white text-center font-bold">
              Do’t worry, we got your back!
            </h1>
            <div className="mt-16">
              <Inputs
                size="lg"
                placeHolder="Enter your email adress"
                placeHolderColor="#FFF"
                textColor="#FFF"
                className="mb-8"
              />
              <Buttons
                className="w-full py-2.5"
                text="Send Link"
                textEdit="text-lg font-bold"
              />
            </div>
            <p className="text-white text-center text-lg mt-8 max-w-sm">
              You will receive a link to reset your password. If you haven’t
              received any link, click{" "}
              <Button variant="unstyled">
                <p className="underline text-bold mb-0.5">Resend Link</p>
              </Button>
            </p>
          </section>
        </section>
      </section>
    </AuthLayout>
  );
};

export default ForgotPassword;
