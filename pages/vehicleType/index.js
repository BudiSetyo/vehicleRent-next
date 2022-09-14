import { MainLayout, Search, VehicleList } from "@/components";

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
          <VehicleList title="Popular in town" />
        </section>
      </section>
    </MainLayout>
  );
};

export default VehicleType;
