import { Buttons, MainLayout, Loading, Selects } from "@/components";
import { IconButton, Icon, Box } from "@chakra-ui/react";
import { FaAngleLeft, FaAngleDown } from "react-icons/fa";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";
const api = process.env.API_URL;

const Payment = () => {
  const router = useRouter();
  const { id } = router.query;
  const userData = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);
  const [reservation, setReservation] = useState({});
  const vehicleData = reservation.vehicle || {};
  const reservationData = reservation.reservation || {};

  // console.log(reservationData);

  const data = ["cash", "transfer"];

  const fetchData = () => {
    if (id) {
      setLoading(true);

      axios({
        method: "get",
        url: `${api}/reservations/detail/${id}`,
      })
        .then((response) => {
          setLoading(false);
          setReservation(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handlePayment = () => {
    setLoading(true);
    axios({
      method: "patch",
      url: `${api}/payments?reservationId=${id}`,
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
      data: {
        statusPayment: true,
      },
    })
      .then((_) => {
        setLoading(false);
        handleNavigate("/history");
      })
      .catch((err) => console.log(err));
  };

  const handleBack = () => {
    return router.back();
  };

  const handleNavigate = (href) => router.push(href);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MainLayout>
        <section className="md:px-20 md:py-8 px-10 py-4">
          {loading ? <Loading /> : <div />}

          <div className="flex items-center ">
            <IconButton
              variant="unstyled"
              icon={<Icon w={10} h={10} as={FaAngleLeft} />}
              onClick={handleBack}
            />
            <h1 className="ml-6 text-2xl font-bold">Payment</h1>
          </div>

          <section className="mt-10 flex md:flex-row flex-col justify-between">
            <div className="bg-fourth bg-cover bg-center rounded-lg h-80 w-full" />
            <div className="w-20" />
            <div className="w-full md:mt-0 mt-4">
              <div>
                <h1 className="text-4xl font-bold text-onyx-black">
                  {vehicleData?.name || "Vehicle"}
                </h1>
                <h2 className="text-2xl text-onyx-black">
                  {vehicleData.location || "Location"}
                </h2>
                <h2 className="mt-4 text-2xl font-medium text-sand-silver">
                  No prepayment
                </h2>
              </div>
            </div>
          </section>

          <section className="mt-10 flex md:flex-row flex-col">
            <div className="w-full flex py-4 border-2 rounded-lg">
              <p className="mx-auto lg:text-xl text-md font-medium">
                Quantity : {reservationData.quantity} vehicle
              </p>
            </div>

            <div className="w-20" />

            <div className="w-full flex py-4 md:mt-0 mt-4 border-2 rounded-lg">
              <p className="mx-auto lg:text-xl text-md font-medium">
                Reservation Date :
                <span className="text-sand-silver">
                  {" "}
                  {moment(reservationData.startDate).format("DD-MM-YYYY")}
                </span>
              </p>
            </div>
          </section>

          <section className="mt-10 flex md:flex-row flex-col">
            <div className="w-full flex flex-col justify-center py-4 border-2 rounded-lg">
              <div className="mx-auto">
                <p className="mb-4 lg:text-xl text-md font-medium">
                  Order details :
                </p>
                <p className="lg:text-xl text-md">
                  {reservationData.quantity} vehicle : Rp. {vehicleData.price}
                </p>
                <p className="mt-4 lg:text-xl text-md font-medium">
                  Total : Rp. {reservationData.price}
                </p>
              </div>
            </div>

            <div className="w-20" />

            <div className="w-full flex flex-col justify-center py-4 md:mt-0 mt-4 border-2 rounded-lg">
              <div className="mx-auto">
                <p className="mx-auto lg:text-xl text-md font-medium">
                  Identity :
                </p>
                <p className="lg:text-xl text-md">
                  {reservationData.userName}
                  {reservationData.phoneNumber
                    ? `(${reservationData.phoneNumber})`
                    : ""}
                </p>
                <p className="lg:text-xl text-md">{reservationData.email}</p>
              </div>
            </div>
          </section>

          <div className="mt-10 flex md:flex-row flex-col">
            {/* <div className="flex md:flex-row flex-col md:items-center md:mb-0 mb-4">
              <h1 className="lg:text-xl text-lg font-bold md:mb-0 mb-4">
                Payment code :
              </h1>
              <div className="flex items-center md:ml-4 px-4 py-3 border-2 rounded-lg">
                <div className="mx-auto flex items-center">
                  <p className="text-lg">#FG1209878YZS</p>
                  <Buttons
                    className="px-4 py-1.5 ml-3"
                    color="#393939"
                    text="Copy"
                    textEdit="font-bold"
                    textColor="crayola-orange"
                  />
                </div>
              </div>
            </div>

            <div className="w-10 md:block hidden" /> */}

            <div className="flex items-center">
              <Box
                as="button"
                className="md:w-fit w-full flex items-center border-2 rounded-lg px-4 lg:py-3 md:py-0.5 py-3"
              >
                {/* <div className="mx-auto flex">
                  <p className="text-lg mr-4">Select payment methods</p>
                  <Icon w={8} h={8} as={FaAngleDown} />
                </div> */}
                <Selects
                  placeHolder="Select payment methods"
                  data={data}
                  size="lg"
                  borderColor="rgba(0, 0, 0, 0)"
                />
              </Box>
            </div>
          </div>

          <div className="mt-10 mb-6">
            <Buttons
              className="w-full px-4 py-3"
              text="Finish payment"
              textEdit="text-xl font-semibold"
              onClick={() => handlePayment()}
            />
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Payment;
