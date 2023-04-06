import { AuthLayout, Buttons, Inputs } from "@/components";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "node_modules/axios/index";
const api = process.env.API_URL;

const SignIn = () => {
  const router = useRouter();
  const toast = useToast();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleNavigate = (href) => {
    return router.push(href);
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;

    return setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setLoading(!loading);

    const { name, email, password } = formData;

    if (name || email || password === "") {
      return toast({
        title: "Register Failed",
        description: "Fields can't be empty!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    axios({
      method: "post",
      url: `${api}/auth/register`,
      data: formData,
    })
      .then((result) => {
        setLoading(false);
        toast({
          title: "Register Success",
          description: result.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        return handleNavigate("/signIn");
      })
      .catch((err) => {
        setLoading(false);
        return toast({
          title: "Register Failed",
          description: err.response.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
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
                  Already have an account?
                </p>

                <Buttons
                  className="mt-8 py-4 md:max-w-sm w-full"
                  color="#393939"
                  text="Sign In"
                  textColor="crayola-orange"
                  textEdit="text-xl font-bold"
                  onClick={() => {
                    handleNavigate("/signIn");
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
              <form onSubmit={handleSubmitForm}>
                <div>
                  <Inputs
                    className="md:max-w-sm"
                    placeHolder="Name"
                    placeholdercolor="#FFF"
                    textColor="#FFF"
                    size="lg"
                    fontWeight="md"
                    name="name"
                    onChange={handleChangeForm}
                  />

                  <Inputs
                    className="md:max-w-sm mt-6"
                    placeHolder="Email"
                    placeholdercolor="#FFF"
                    textColor="#FFF"
                    size="lg"
                    fontWeight="md"
                    type="email"
                    name="email"
                    onChange={handleChangeForm}
                  />

                  <Inputs
                    className="md:max-w-sm mt-6"
                    placeHolder="Password"
                    placeholdercolor="#FFF"
                    textColor="#FFF"
                    size="lg"
                    fontWeight="md"
                    type="password"
                    name="password"
                    onChange={handleChangeForm}
                  />
                </div>

                <div>
                  <Buttons
                    className="mt-8 py-4 md:max-w-sm w-full"
                    text="Sign Up"
                    textColor="onyx-black"
                    textEdit="text-xl font-bold"
                    type="submit"
                  />
                </div>
              </form>

              <div className="md:hidden">
                <p className="mt-12 text-lg text-white font-bold">
                  Already have an account?
                </p>

                <Buttons
                  className="mt-8 py-4 md:max-w-sm w-full"
                  color="#393939"
                  text="Sign In"
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
