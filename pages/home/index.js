import { MainLayout } from "@/components";
import { ButtonArrow, Cards, CardReview } from "@/components";
import { Wrap } from "@chakra-ui/react";

export default function Home() {
  return (
    <MainLayout>
      <section className="md:py-8 md:px-20 py-4 px-10">
        <section className="mt-10">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Popular in town</h1>
            <ButtonArrow text="View all" />
          </div>

          <Wrap className="mt-10" justify="space-between">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </Wrap>
        </section>

        <section className="mt-16 mb-10">
          <h1 className="text-3xl font-bold">Testimonial</h1>

          <div className="flex md:flex-row items-center flex-col-reverse mt-16">
            <div className="w-full mt-8">
              <p className="max-w-sm mb-10 text-lg">
                ”It was the right decision to rent vehicle here, I spent less
                money and enjoy the trip. It was an amazing experience to have a
                ride for wildlife trip!”
              </p>

              <h1 className="text-lg text-onyx-black font-bold">
                Edward Newgate
              </h1>
              <h3 className="text-old-silver">Founder Circle</h3>
            </div>
            <div className="w-full flex md:justify-center">
              <CardReview />
            </div>
          </div>
        </section>
      </section>
    </MainLayout>
  );
}
