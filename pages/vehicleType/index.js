import { MainLayout, ButtonArrow, Cards, Search } from "@/components";
import { Wrap } from "@chakra-ui/react";

const VehicleType = () => {
  return (
    <MainLayout>
      <section className="md:py-8 md:px-20 py-4 px-10">
        <Search
          placeHolder="Search vehicle (ex. cars, cars name)"
          placeHolderColor="#B8BECD"
          backgroundIcon="#FFF"
        />

        <section className="mt-20">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Popular in town</h1>
            <ButtonArrow text="View all" />
          </div>

          <Wrap className="mt-10" justify="space-between" spacing="30px">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </Wrap>
        </section>
      </section>
    </MainLayout>
  );
};

export default VehicleType;
