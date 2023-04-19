import {
  MainLayout,
  VehicleList,
  Cards,
  AutoComplete,
  Pagination,
} from "@/components";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { axios } from "axios";
const api = process.env.API_URL;

const VehicleType = () => {
  const router = useRouter();
  const { type } = router.query;

  const vehicleData = useSelector((state) => state.vehicles);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const handleNavigate = (href) => {
    return router.push(href);
  };

  const fetchData = () => {
    setLoading(!loading);

    axios({
      method: "get",
      url: ``,
    })
      .then()
      .catch();
  };

  return (
    <MainLayout>
      <section className="md:py-8 md:px-20 py-4 px-10">
        <AutoComplete />

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

        <div className="mt-10 flex justify-center">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={100}
            pageSize={10}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default VehicleType;
