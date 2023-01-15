import { MainLayout, Search, VehicleList, Cards } from "@/components";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const VehicleType = () => {
  const router = useRouter();
  const { type } = router.query;

  const vehicleData = useSelector((state) => state.vehicles);

  const handleNavigate = (href) => {
    return router.push(href);
  };

  return (
    <MainLayout>
      <section className="md:py-8 md:px-20 py-4 px-10">
        <Search
          placeHolder="Search vehicle (ex. cars, cars name)"
          placeHolderColor="#B8BECD"
          backgroundIcon="#FFF"
        />

        <section>
          <VehicleList
            title={
              type === "popular"
                ? "Popular in town"
                : type === "cars"
                ? "Cars"
                : type === "moto-bike"
                ? "Moto bike"
                : type === "bike"
                ? "Bike"
                : "Your title"
            }
            hidden={true}
          >
            {vehicleData
              .filter((vehicles) =>
                type === "popular"
                  ? vehicles.isPopular
                  : type === "cars"
                  ? vehicles.type === "car"
                  : type === "moto-bike"
                  ? vehicles.type === "moto bike"
                  : type === "bike"
                  ? vehicles.type === "bike"
                  : vehicles
              )
              .map((vehicle, index) => {
                return (
                  <Cards
                    key={index}
                    name={vehicle.name}
                    location={vehicle.location}
                    image={vehicle.picture}
                    onClick={() => {
                      handleNavigate(`/vehicleType/detail/${vehicle.id}`);
                    }}
                  />
                );
              })}
          </VehicleList>
        </section>
      </section>
    </MainLayout>
  );
};

export default VehicleType;
