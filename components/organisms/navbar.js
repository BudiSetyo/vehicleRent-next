import { Tabs, TabList, Tab, IconButton, Icon, Avatar } from "@chakra-ui/react";
import { FaBars, FaRegEnvelope } from "react-icons/fa";
import { Buttons } from "@/components";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const [nav, setNav] = useState(false);

  const navbarList = ["Home", "Vehicle Type", "History", "About"];
  const user = {
    name: "Kojok Lam",
    notif: 2,
    login: false,
  };

  const closeNavbar = () => {
    setNav(false);
  };

  const handleNavigate = (href) => {
    return router.push(href);
  };

  return (
    <nav className="fixed bg-white top-0 left-0 right-0 z-10 ">
      <section className="2xl:container mx-auto md:px-20 md:py-6 px-10 py-3">
        <section className="flex justify-between items-center">
          <div className="w-10 h-10">
            <Image src="/logo.svg" width={"100%"} height={"100%"} />
          </div>

          <div className="flex md:hidden">
            <div className="relative">
              <div
                className={`${
                  user.notif !== 0 ? "absolute" : "hidden"
                } top-0 left-0 bg-crayola-orange h-5 w-5 flex justify-center items-center rounded-full z-10`}
              >
                <p className="text-xs font-bold">{user.notif}</p>
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
            <Tabs variant="unstyled">
              <TabList>
                {navbarList.map((item, index) => {
                  return (
                    <Tab
                      _selected={{ color: "#393939" }}
                      className="text-pastel-blue text-base"
                      key={index}
                      onClick={() => {
                        handleNavigate(
                          item === "Vehicle Type"
                            ? "/vehicleType"
                            : item.toLowerCase()
                        );
                      }}
                    >
                      {item}
                    </Tab>
                  );
                })}
              </TabList>
            </Tabs>

            {user.login ? (
              <>
                <div className="ml-20 flex items-center">
                  <div className="mr-6 relative">
                    <div
                      className={`${
                        user.notif !== 0 ? "absolute" : "hidden"
                      } top-0 left-0 bg-crayola-orange h-5 w-5 flex justify-center items-center rounded-full z-10`}
                    >
                      <p className="text-xs font-bold">{user.notif}</p>
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
                    />
                  </div>
                  <div>
                    <Avatar name={user.name} size="md" />
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
                      : item.toLowerCase()
                  );
                  closeNavbar();
                }}
              />
            );
          })}
        </div>

        <div className="flex flex-col">
          {user.login ? (
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
                  handleNavigate("signIn");
                }}
              />
              <Buttons
                className="w-full py-2"
                text="Register"
                textColor="onyx-black"
                onClick={() => {
                  handleNavigate("signUp");
                }}
              />
            </>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
