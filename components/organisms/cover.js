// import { AutoComplete } from "@/components";
// import { useSelector } from "react-redux";

const Cover = () => {
  //   const vehicleData = useSelector((state) => state.vehicles);

  return (
    <section className="bg-third bg-cover bg-center">
      <section className="bg-wrap-opacity">
        <div className="md:py-20 md:px-20 py-20 px-10 max-w-screen-xl mx-auto ">
          <h1 className="md:text-8xl text-5xl max-w-md mb-8 md:mb-20 font-bold text-white">
            Explore and Travel
          </h1>

          {/* <div className="max-w-md">
            <h3 className="text-xl text-white mb-10">Vehicle Finder</h3>
            <div className="border-b-2 w-4 mb-10" />
            <AutoComplete placeHolder="Search cars name" data={vehicleData} />
            <div className="mb-10" />
          </div> */}
        </div>
      </section>
    </section>
  );
};

export default Cover;
