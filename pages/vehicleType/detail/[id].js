import { MainLayout, Buttons } from "@/components";
import { Box, Icon, IconButton } from "@chakra-ui/react";
import { FaAngleLeft, FaHeart } from "react-icons/fa";
import { useRouter } from "next/router";

const Detail = ({ data }) => {
  const router = useRouter();

  const handleBack = () => {
    return router.back();
  };

  return (
    <>
      <MainLayout>
        <section className="md:px-20 md:py-10 px-10 py-5">
          <div>
            <Box
              as="button"
              className="flex items-center"
              onClick={() => handleBack()}
            >
              <Icon as={FaAngleLeft} color="#393939" h={10} w={10} />
              <p className="text-onyx-black text-2xl font-bold ml-5">Back</p>
            </Box>
          </div>

          <section className="mt-16">
            <div className="flex md:flex-row flex-col">
              <div className="md:mr-20 w-full lg:h-96 h-72 rounded-lg bg-third bg-cover bg-center" />
              <div className="md:mt-0 mt-4 w-full flex flex-col justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-onyx-black">
                    {data?.name || "Vehicle"} - {data?.color || "Color"}
                  </h1>
                  <h2 className="text-xl">{data?.location || "Location"}</h2>
                </div>

                <div>
                  <p className="text-xl text-ao-green font-bold">
                    {data?.status || "Status"}
                  </p>
                  <p className="text-xl text-sangria-red font-bold">
                    {data?.prePayment || "No prepayment"}
                  </p>
                </div>

                <div>
                  <p className="mb-4 text-xl text-onyx-black">
                    Capacity: {data?.capacity || "1"} person
                  </p>
                  <p className="mb-4 text-xl text-onyx-black">
                    Type: {data?.type || "Type of vehicle"}
                  </p>
                  <p className="text-xl text-onyx-black">
                    {data?.reservation || "Reservation"}
                  </p>
                </div>

                <p className="text-3xl font-bold">
                  Rp. {data?.cost || "100.000"}/day
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 flex justify-between">
            <Buttons
              className="w-full py-4 px-2"
              color="#393939"
              textEdit="md:text-xl text-md font-bold"
              textColor="crayola-orange"
              text="Chat Admin"
            />

            <div className="w-10" />

            <Buttons
              className="w-full py-4 px-2"
              textEdit="md:text-xl text-md font-bold"
              text="Reservation"
            />

            <div className="w-10" />

            <Box as="button" className="w-36 rounded-lg bg-onyx-black">
              <Icon color="#FFCD61" w={8} h={8} as={FaHeart} />
            </Box>
          </section>
        </section>
      </MainLayout>
    </>
  );
};

export default Detail;
