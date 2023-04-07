import { MainLayout } from "@/components";

const About = () => {
  return (
    <MainLayout>
      <section className="px-20 py-10">
        <h1 className="text-4xl font-bold text-center">About vRent</h1>
        <div className="flex flex-col gap-2 mt-6">
          <p className="text-md font-semibold text-center">
            Are you tired of the hassle of renting a vehicle? Do you want a more
            convenient and easy way to get a rental car or truck? Look no
            further than our new vehicle rental app!
          </p>

          <p className="text-md font-semibold text-center">
            Our app is designed to make renting a vehicle simple and
            stress-free. With just a few taps on your smartphone, you can select
            the type of vehicle you need, choose the pickup and drop-off
            locations, and reserve your rental. It's that easy!
          </p>

          <p className="text-md font-semibold text-center">
            One of the best features of our app is the ability to choose from a
            variety of vehicles. Whether you need a small car for a quick trip
            around town, a larger vehicle for a family vacation, or a pickup
            truck for a move, we have you covered. Our fleet includes vehicles
            from all the top brands, and we regularly maintain and service them
            to ensure your safety and comfort.
          </p>

          <p className="text-md font-semibold text-center">
            Another great feature of our app is the ability to select the pickup
            and drop-off locations that are most convenient for you. If you need
            to rent a car from the airport, we have locations at all the major
            airports in the area. If you need to pick up a truck from a specific
            neighborhood, we have locations throughout the city to serve you.
          </p>

          <p className="text-md font-semibold text-center">
            Our app also allows you to track your rental and modify your
            reservation as needed. If your plans change and you need to extend
            your rental or switch to a different vehicle, you can do so easily
            within the app.
          </p>

          <p className="text-md font-semibold text-center">
            In addition to these features, our rental app also includes 24/7
            customer service support. If you have any questions or concerns
            about your rental, simply contact our support team through the app,
            and we'll be happy to help.
          </p>

          <p className="text-md font-semibold text-center">
            So why wait? Download our rental app today and experience the
            convenience of renting a vehicle with just a few taps on your phone.
            Say goodbye to the hassle of renting a car and hello to stress-free
            travel!
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
