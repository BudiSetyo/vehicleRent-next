import { MainLayout, Search, VehicleList, Cards } from "@/components";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const VehicleType = () => {
  const router = useRouter();

  const vehicleData = useSelector((state) => state.vehicles);
  // console.log(vehicleData);

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
            title="Popular in town"
            viewAll={() => {
              handleNavigate(`/vehicleType/category/popular`);
            }}
          >
            {vehicleData
              .filter((popular) => popular.isPopular)
              .filter((_, index) => index < 4)
              .map((vehicle, index) => {
                return (
                  <Cards
                    key={index}
                    name={vehicle.name}
                    location={vehicle.location}
                    onClick={() => {
                      handleNavigate(`/vehicleType/detail/${vehicle.id}`);
                    }}
                  />
                );
              })}
          </VehicleList>

          <VehicleList title="Cars">
            {vehicleData
              .filter((popular) => popular.type === "car")
              .filter((_, index) => index < 4)
              .map((vehicle, index) => {
                return (
                  <Cards
                    key={index}
                    name={vehicle.name}
                    location={vehicle.location}
                    onClick={() => {
                      handleNavigate(`/vehicleType/detail/${vehicle.id}`);
                    }}
                  />
                );
              })}
          </VehicleList>

          <VehicleList title="Motorbike">
            {vehicleData
              .filter((popular) => popular.type === "moto bike")
              .filter((_, index) => index < 4)
              .map((vehicle, index) => {
                return (
                  <Cards
                    key={index}
                    name={vehicle.name}
                    location={vehicle.location}
                    onClick={() => {
                      handleNavigate(`/vehicleType/detail/${vehicle.id}`);
                    }}
                  />
                );
              })}
          </VehicleList>

          <VehicleList title="Bike">
            {vehicleData
              .filter((popular) => popular.type === "bike")
              .filter((_, index) => index < 4)
              .map((vehicle, index) => {
                return (
                  <Cards
                    key={index}
                    name={vehicle.name}
                    location={vehicle.location}
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
