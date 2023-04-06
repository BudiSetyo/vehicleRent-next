import { AuthLayout, Buttons, Inputs, Loading } from "@/components";
import { Button, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin, setHistory } from "@/configs";
import axios from "axios";

const api = process.env.API_URL;

const SignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const toast = useToast();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleNavigate = (href) => {
    return router.push(href);
  };

  const handleEmail = (e) => {
    setLogin({ ...login, email: e.target.value });
  };

  const handlePassword = (e) => {
    setLogin({ ...login, password: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    if (login.email === "" || login.password === "") {
      setLoading(false);
      return toast({
        title: "Login Failed",
        description: "Fields can't be empty!",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }

    axios({
      method: "post",
      url: `${api}/auth/login`,
      data: {
        email: login.email,
        password: login.password,
      },
    })
      .then((response) => {
        dispatch(userLogin(response.data));
        dispatch(setHistory(response.data.token));
        setLoading(false);
        toast({
          title: "Login Success",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        return handleNavigate("/");
      })
      .catch((err) => {
        setLoading(false);
        toast({
          title: "Login Failed",
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
        {loading ? <Loading /> : <div />}
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
              <form onSubmit={handleLogin}>
                <div>
                  <Inputs
                    className="md:max-w-sm mt-6"
                    placeHolder="Email"
                    placeholdercolor="#FFF"
                    textColor="#FFF"
                    size="lg"
                    fontWeight="md"
                    value={login.email}
                    onChange={handleEmail}
                  />

                  <Inputs
                    className="md:max-w-sm mt-6"
                    placeHolder="Password"
                    placeholdercolor="#FFF"
                    textColor="#FFF"
                    size="lg"
                    fontWeight="md"
                    type="password"
                    value={login.password}
                    onChange={handlePassword}
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
                    type={"submit"}
                  />
                </div>
              </form>

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
