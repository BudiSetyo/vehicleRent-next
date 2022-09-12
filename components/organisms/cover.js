import { Inputs, Selects, Buttons } from "@/components";

const Cover = () => {
  const sirup = ["Marjan", "ABC"];

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
            />
            <div className="flex mb-8">
              <Selects placeHolder="Location" data={sirup} />
              <div className="w-8" />
              <Selects placeHolder="Date" data={sirup} />
            </div>
            <Buttons
              className="px-10 py-2"
              text="Search"
              textColor="onyx-black"
              textEdit="font-bold"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Cover;
