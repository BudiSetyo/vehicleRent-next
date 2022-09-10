import { MainLayout, Search } from "@/components";

import { Popular, Cars, Motorbike, Bike } from "./components";

const VehicleType = () => {
  return (
    <MainLayout>
      <section className="md:py-8 md:px-20 py-4 px-10">
        <Search
          placeHolder="Search vehicle (ex. cars, cars name)"
          placeHolderColor="#B8BECD"
          backgroundIcon="#FFF"
        />

        <section>
          <Popular />
        </section>
      </section>
    </MainLayout>
  );
};

export default VehicleType;
