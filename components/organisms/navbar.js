import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { Buttons } from "@/components";

const Navbar = () => {
  const navbarList = ["Home", "Vehicle Type", "History", "About"];

  return (
    <section className="py-10 px-20">
      <navbar className="flex justify-between">
        <h1>Logo</h1>

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

          <div>
            <Buttons className="mr-2" text={"Login"}></Buttons>
            <Buttons text={"Register"}></Buttons>
          </div>
        </div>
      </navbar>
    </section>
  );
};

export default Navbar;
