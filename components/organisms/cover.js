import { Inputs, Buttons } from "@/components";
import { useState } from "react";
import { useRouter } from "next/router";

const Cover = () => {
  const router = useRouter();

  const [vehicle, setVehicle] = useState("");
  // const [searchVisible, setSearchVisible] = useState(false);

  const handleChangeVehicle = (e) => {
    setVehicle(e.target.value);
  };

  const handleSearch = () => {
    if (vehicle === "") {
      return console.log("Fields can't be empty");
    }

    return router.push("/vehicleType/detail/12");
  };

  return (
    <section className="bg-third bg-cover bg-center">
      <section className="bg-wrap-opacity">
        <div className="md:py-20 md:px-20 py-5 px-10 max-w-screen-xl mx-auto ">
          <h1 className="text-2xl md:text-6xl max-w-md mb-8 md:mb-20 font-bold text-dark-gunmetal">
            Explore and Travel
          </h1>

          <div className="max-w-md">
            <h3 className="text-white mb-6">Vehicle Finder</h3>

            <div className="border-b-2 w-4 mb-8" />

            <Inputs
              className="mb-8"
              placeHolder="Type the vehicle (ex. motorbike"
              placeHolderColor="#4A4C53"
              onChange={handleChangeVehicle}
              borderColor="rgba(255, 255, 255, 0.5)"
            />

            {/* <div className={`relative ${searchVisible ? "" : "hidden"}`}>
              <div className="absolute bg-white p-4 rounded">
                <h1>Data</h1>
              </div>
            </div> */}
            {/* <div className="flex mb-8">
              <Selects placeHolder="Location" data={sirup} />
              <div className="w-8" />
              <Selects placeHolder="Date" data={sirup} />
            </div> */}
            <Buttons
              className="px-10 py-2"
              text="Search"
              textColor="onyx-black"
              textEdit="font-bold"
              onClick={handleSearch}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Cover;
