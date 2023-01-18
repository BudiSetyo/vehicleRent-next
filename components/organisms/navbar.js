import { Button, IconButton, Icon, Avatar, Wrap, Box } from "@chakra-ui/react";
import {
  FaBars,
  FaRegEnvelope,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
import { Buttons } from "@/components";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "@/configs";
import axios from "axios";
const api = process.env.API_URL;

const Navbar = ({ active }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [nav, setNav] = useState(false);
  const [profileNav, setProfileNav] = useState(false);
  const [messageNav, setMessageNav] = useState(false);

  const navbarList = ["Home", "Vehicle Type", "History", "About"];

  const closeNavbar = () => {
    setNav(false);
  };

  const handleNavigate = (href) => {
    return router.push(href);
  };

  const handleProvileNav = () => {
    setProfileNav(!profileNav);
  };

  const handleMessageNav = () => {
    setMessageNav(!messageNav);
  };

  const handleLogout = () => {
    dispatch(userLogout());
    return handleNavigate("/");
  };

  const checkToken = () => {
    if (user.isLogin) {
      axios({
        method: "get",
        url: `${api}/auth`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }).catch((_) => {
        dispatch(userLogout());
        return handleNavigate("/");
      });
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <section>
      <nav className="fixed bg-white top-0 left-0 right-0 z-10 ">
        <section className="max-w-screen-xl container mx-auto md:px-20 md:py-6 px-10 py-3">
          <section className="flex justify-between items-center">
            <div className="w-10 h-10">
              <Image
                alt="logo"
                src="/logo.svg"
                width={"100%"}
                height={"100%"}
              />
            </div>

            <div className="flex md:hidden">
              <div className="relative">
                <div
                  className={`${
                    user.data?.notif !== 0 || undefined ? "absolute" : "hidden"
                  } top-0 left-0 bg-crayola-orange h-5 w-5 flex justify-center items-center rounded-full z-10`}
                >
                  <p className="text-xs font-bold">{user.data?.notif}</p>
                </div>
                <IconButton
                  variant="unstyled"
                  icon={<Icon color="#FFCD61" as={FaBars} w={8} h={8} />}
                  onClick={() => {
                    setNav(!nav);
                  }}
                />
              </div>
            </div>

            <div className="hidden md:flex items-center">
              <Wrap className="mr-10" spacing="20px">
                {navbarList.map((item, index) => {
                  return (
                    <Button
                      key={index}
                      variant="unstyled"
                      onClick={() => {
                        handleNavigate(
                          item === "Home"
                            ? "/"
                            : item === "Vehicle Type"
                            ? "/vehicleType"
                            : `/${item.toLowerCase()}`
                        );
                      }}
                    >
                      <p
                        className={
                          active === item.toLocaleLowerCase()
                            ? "text-old-silver"
                            : "text-pastel-blue"
                        }
                      >
                        {item}
                      </p>
                    </Button>
                  );
                })}
              </Wrap>

              {user.isLogin ? (
                <>
                  <div className="ml-20 flex items-center">
                    <div>
                      <div className="mr-6 relative">
                        <div
                          className={`${
                            user.data?.notif !== 0 ? "absolute" : "hidden"
                          } top-0 left-0 bg-crayola-orange h-5 w-5 flex justify-center items-center rounded-full z-10`}
                        >
                          <p className="text-xs font-bold">
                            {user.data?.notif}
                          </p>
                        </div>
                        <IconButton
                          variant="unstyled"
                          icon={
                            <Icon
                              color="#FFCD61"
                              as={FaRegEnvelope}
                              w={10}
                              h={10}
                            />
                          }
                          onClick={handleMessageNav}
                        />
                      </div>

                      <div
                        className={`relative ${
                          messageNav ? "block" : "hidden"
                        }`}
                      >
                        <div className="absolute rounded-lg z-20 shadow-2xl w-72 px-6 py-8 mt-5 right-2 bg-white">
                          <div>
                            <Box className="pb-6 pt-2 border-b-2">
                              <div className="flex justify-between items-center">
                                <h1 className="text-lg font-bold">user</h1>
                                <p className="text-sand-silver text-md">
                                  Just now
                                </p>
                              </div>
                              <div className="mt-4 flex justify-between items-center cursor-pointer">
                                <p className="font-medium">
                                  Hey, there are 3 vespa left
                                </p>
                                <div className="text-center bg-crayola-orange h-6 w-6 rounded-full">
                                  <p className="font-bold">1</p>
                                </div>
                              </div>
                            </Box>
                          </div>
                          <div className="mt-4 flex justify-center">
                            <Button
                              variant="unstyled"
                              onClick={() => handleNavigate("/chats")}
                            >
                              <p className="text-lg">View all</p>
                              <Icon w={4} h={4} as={FaChevronDown} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Avatar
                        className="cursor-pointer"
                        name={user.data.name}
                        size="md"
                        onClick={handleProvileNav}
                      />

                      <div
                        className={`relative ${
                          profileNav ? "block" : "hidden"
                        }`}
                      >
                        <div className="w-48 flex flex-col absolute rounded-lg z-20 shadow-2xl mt-5 right-2 bg-white">
                          <Box
                            as="button"
                            className="flex justify-between items-center px-5 py-4 border-b-2"
                            variant="unstyled"
                            onClick={() => handleNavigate("/profile")}
                          >
                            <p className="text-lg font-bold">Edit Profile</p>
                            <Icon
                              color="#999999"
                              w={5}
                              h={5}
                              as={FaChevronRight}
                            />
                          </Box>
                          <Box
                            as="button"
                            className="flex items-center justify-between px-5 py-4 "
                            variant="unstyled"
                            onClick={handleLogout}
                          >
                            <p className="text-lg font-bold">Log out</p>
                            <Icon
                              color="#999999"
                              w={5}
                              h={5}
                              as={FaChevronRight}
                            />
                          </Box>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex">
                    <Buttons
                      className="w-20 mr-4 py-2"
                      text="Login"
                      variant="outline"
                      textColor="onyx-black"
                      onClick={() => {
                        handleNavigate("/signIn");
                      }}
                    />
                    <Buttons
                      className="w-20 py-2"
                      text="Register"
                      textColor="onyx-black"
                      onClick={() => {
                        handleNavigate("/signUp");
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          </section>
        </section>
        <section
          className={`${
            !nav ? "hidden" : ""
          } bg-ghost-white mt-4 px-4 py-4 shadow-md`}
        >
          <div className="flex flex-col">
            {navbarList.map((item, index) => {
              return (
                <Buttons
                  className="rounded-none mb-2"
                  color="ghost-white"
                  text={item}
                  key={index}
                  onClick={() => {
                    handleNavigate(
                      item === "Vehicle Type"
                        ? "/vehicleType"
                        : `/${item.toLowerCase()}`
                    );
                    closeNavbar();
                  }}
                />
              );
            })}
          </div>

          <div className="flex flex-col">
            {user.isLogin ? (
              <>
                <Buttons
                  className="w-full mb-2 py-2"
                  text="Messages"
                  variant="outline"
                  textColor="onyx-black"
                />
                <Buttons
                  className="w-full py-2"
                  text="Profile"
                  textColor="onyx-black"
                />
              </>
            ) : (
              <>
                <Buttons
                  className="w-full mb-2 py-2"
                  text="Login"
                  variant="outline"
                  textColor="onyx-black"
                  onClick={() => {
                    handleNavigate("/signIn");
                  }}
                />
                <Buttons
                  className="w-full py-2"
                  text="Register"
                  textColor="onyx-black"
                  onClick={() => {
                    handleNavigate("/signUp");
                  }}
                />
              </>
            )}
          </div>
        </section>
      </nav>
    </section>
  );
};

export default Navbar;
