import {
  MainLayout,
  VehicleList,
  Cards,
  AutoComplete,
  Pagination,
  Loading,
} from "@/components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import { useSelector } from "react-redux";
import axios from "axios";
const api = process.env.API_URL;

const VehicleType = () => {
  const router = useRouter();
  const { type } = router.query;

  //   const vehicleData = useSelector((state) => state.vehicles);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    results: [],
    total: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const handleNavigate = (href) => {
    return router.push(href);
  };

  const fetchData = (page) => {
    setLoading(!loading);

    axios({
      method: "get",
      url:
        type === "popular"
          ? `${api}/vehicles/?popular=true&page=${page}&row=4`
          : type === "cars"
          ? `${api}/vehicles/?type=a5d6059c-5899-4d81-8e01-72cd58515044&page=${page}&row=4`
          : type === "moto-bike"
          ? `${api}/vehicles/?type=2a2823f0-ddc6-4c25-8f8c-791f7bdeea76&page=${page}&row=4`
          : `${api}/vehicles/?type=a0acce4f-6149-4e21-83cf-fff17fafae03&page=${page}&row=4`,
    })
      .then((result) => {
        setLoading(false);
        setData(result.data.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handlePage = (page) => fetchData(page);

  useEffect(() => {
    handlePage(currentPage);
  }, [currentPage]);

  return (
    <MainLayout>
      {loading ? <Loading /> : <></>}

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
            {data.results.map((vehicle, index) => {
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
            totalCount={data.total}
            pageSize={4}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default VehicleType;
