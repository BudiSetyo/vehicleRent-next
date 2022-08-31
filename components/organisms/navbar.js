import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { Buttons } from "@/components";
import Image from "next/image";

const Navbar = () => {
  const navbarList = ["Home", "Vehicle Type", "History", "About"];

  return (
    <section className="py-10 px-20">
      <navbar className="flex justify-between">
        <div>
          <Image src="/logo.svg" width={41} height={41} />
        </div>

        <div className="flex">
          <div>
            <Tabs variant="unstyled">
              <TabList>
                {navbarList.map((item, index) => {
                  return (
                    <Tab
                      _selected={{ color: "black" }}
                      className="text-gray-400"
                      key={index}
                    >
                      {item}
                    </Tab>
                  );
                })}
              </TabList>
            </Tabs>
          </div>

          <div className="flex">
            <Buttons text={"Login"} />
          </div>
        </div>
      </navbar>
    </section>
  );
};

export default Navbar;
