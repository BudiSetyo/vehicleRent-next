import { MainLayout } from "@/components";
import { ButtonArrow, Cards } from "@/components";
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
            <Cards />
            <Cards />
          </Wrap>
        </section>

        <section className="mt-16">
          <h1 className="text-3xl font-bold">Testimonial</h1>
        </section>
      </section>
    </MainLayout>
  );
}
