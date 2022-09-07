import { MainLayout, Search, Selects, Cards } from "@/components";
import { Wrap, Box, Icon } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const History = () => {
  const data = ["bon"];
  return (
    <MainLayout>
      <section className="flex lg:flex-row flex-col md:py-8 md:px-20 py-4 px-10">
        <div className="w-full md:mr-20">
          <div className="flex">
            <Search
              className="w-full mr-10 bg-sand-silver"
              placeHolder="Search history"
              placeHolderColor="#767680"
              background="sand-silver"
              backgroundIcon="#C4C4C4"
            />
            <div className="w-32">
              <Selects
                className="w-full px-5"
                background="#C4C4C4"
                placeHolder="Filter"
                placeHolderColor="#767680"
                data={data}
              />
            </div>
          </div>

          <div className="mt-12">
            <h1>Content</h1>
          </div>
        </div>

        <div className="py-5 lg:mt-0 mt-10 md:flex flex-col items-center w-full lg:max-w-xs border rounded-lg">
          <h1 className="text-xl text-center text-onyx-black font-bold mb-10">
            New Arrival
          </h1>
          <Wrap justify="center" spacing="30px">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </Wrap>

          <div className="flex justify-center">
            <Box className="mt-10" as="button">
              <p className="text-quick-silver">View more</p>
              <Icon as={FaChevronDown} w={10} h={10} />
            </Box>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default History;
