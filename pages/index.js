import { MainLayout } from "@/components";
import { Buttons, Inputs, Selects } from "@/components";

export default function App() {
  const sirup = ["Marjan", "ABC"];

  return (
    <MainLayout>
      <section className="py-10 px-20">
        <section className="bg-third bg-cover bg-center">
          <div className="md:py-10 md:px-16 py-5 px-8 bg-wrap-opacity">
            <h1 className="text-2xl md:text-6xl max-w-md mb-8 md:mb-20 font-bold text-dark-gunmetal">
              Explore and Travel
            </h1>

            <div className="max-w-md">
              <h3 className="text-white mb-8">Vehicle Finder</h3>
              <Inputs
                className="mb-8"
                placeHolder="Type the vehicle (ex. motorbike"
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
    </MainLayout>
  );
}
