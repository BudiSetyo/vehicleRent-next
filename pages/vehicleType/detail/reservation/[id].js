import { MainLayout, Inputs, Selects, Buttons } from "@/components";
import { Box, Icon, IconButton } from "@chakra-ui/react";
import { FaAngleLeft, FaPlus, FaMinus } from "react-icons/fa";
import { useRouter } from "next/router";

const Reservation = () => {
  const router = useRouter();

  const data = ["marjan"];

  const handleBack = () => {
    return router.back();
  };
  return (
    <>
      <MainLayout>
        <section className="md:px-20 md:py-10 px-10 py-5">
          <div className="flex items-center">
            <Box as="button" onClick={() => handleBack()}>
              <Icon as={FaAngleLeft} color="#393939" h={10} w={10} />
            </Box>
            <h1 className="text-onyx-black text-2xl font-bold ml-5">
              Reservation
            </h1>
          </div>

          <section className="mt-16">
            <div className="flex md:flex-row flex-col">
              <div className="md:mr-16 w-full lg:h-96 h-72 rounded-lg bg-third bg-cover bg-center" />
              <div className="md:mt-0 mt-4 w-full flex flex-col justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-onyx-black">
                    {data?.name || "Vehicle"} - {data?.color || "Color"}
                  </h1>
                  <h2 className="text-xl">{data?.location || "Location"}</h2>
                  <p className="text-xl text-sangria-red">
                    {data?.prePayment || "No prepayment"}
                  </p>
                </div>

                <div className="flex items-center mt-4">
                  <IconButton
                    _hover={{ backgroundColor: "#FFCD61" }}
                    icon={<Icon w={6} h={6} as={FaMinus} />}
                  />
                  <h1 className="mx-10 text-3xl font-bold">2</h1>
                  <IconButton
                    backgroundColor="#FFCD61"
                    icon={<Icon w={6} h={6} as={FaPlus} />}
                  />
                </div>

                <div className="mt-4">
                  <h1 className="text-xl font-bold">Reservation Date :</h1>
                  <Inputs
                    background="#DADADA"
                    borderColor="#DADADA"
                    placeHolder="Select date"
                    className="mt-4"
                  />
                  <div className="mt-4">
                    <Selects
                      background="#DADADA"
                      data={data}
                      borderColor="#DADADA"
                      placeHolder="1 Day"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Buttons
            className="w-full mt-10 py-3"
            textEdit="text-lg font-bold"
            text="Go to Payment"
          />
        </section>
      </MainLayout>
    </>
  );
};

export default Reservation;
