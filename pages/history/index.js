import { MainLayout, Search, Selects, Cards } from "@/components";
import { Wrap } from "@chakra-ui/react";

const History = () => {
  const data = ["bon"];
  return (
    <MainLayout>
      <section className="flex lg:flex-row md:flex-col md:py-8 md:px-20 py-4 px-10">
        <div className="w-full md:mr-20">
          <div className="flex">
            <Search
              className="w-full mr-10 bg-sand-silver"
              placeHolder="Search history"
              background="sand-silver"
              backgroundIcon="#C4C4C4"
            />
            <div className="w-32">
              <Selects
                className="w-full px-5"
                background="#C4C4C4"
                placeHolder="Filter"
                placeHolderColor="#FFF"
                data={data}
              />
            </div>
          </div>

          <div className="mt-12">
            <h1>Content</h1>
          </div>
        </div>

        <div className="py-5 lg:mt-0 md:mt-10 md:flex flex-col items-center hidden w-full lg:max-w-xs border rounded-lg">
          <h1 className="text-xl text-onyx-black font-bold mb-10">
            New Arrival
          </h1>
          <Wrap justify="center" spacing="30px">
            <Cards />
            <Cards />
          </Wrap>
        </div>
      </section>
    </MainLayout>
  );
};

export default History;
