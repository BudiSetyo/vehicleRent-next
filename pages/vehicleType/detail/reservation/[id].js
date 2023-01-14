import {
  MainLayout,
  Loading,
  Selects,
  Buttons,
  DatePicker,
} from "@/components";
import { Box, Icon, IconButton } from "@chakra-ui/react";
import { FaAngleLeft, FaPlus, FaMinus } from "react-icons/fa";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";
const api = process.env.API_URL;

const Reservation = () => {
  const router = useRouter();
  const { id } = router.query;
  const userData = useSelector((state) => state.user);

  // console.log(userData);

  const [vehicleData, setVehicleData] = useState({});
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({
    quantity: 1,
    startDate: new Date(),
    days: 1,
  });

  const days = [1, 2, 3];

  const handleBack = () => {
    return router.back();
  };

  const handleValue = (data) => {
    if (data === "plus") {
      setValue({ ...value, quantity: value.quantity + 1 });
    } else if (data === "min") {
      setValue({ ...value, quantity: value.quantity - 1 });
    }
  };

  const fetchData = () => {
    if (id) {
      setLoading(true);

      axios({
        method: "get",
        url: `${api}/vehicles/detail/${id}`,
      })
        .then((response) => {
          setLoading(false);
          setVehicleData(response.data.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const addReservation = () => {
    setLoading(true);

    axios({
      method: "post",
      url: `${api}/reservations?vehicleId=${vehicleData.id}`,
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
      data: {
        quantity: value.quantity,
        startDate: moment(value.startDate).format("YYYY-MM-DD, h:mm:ss"),
        endDate: moment().add(value.days, "days").format("YYYY-MM-DD, h:mm:ss"),
        paymentType: "transfer",
        statusPayment: false,
        paymentCode: "asdasd",
        price: vehicleData.price * value.quantity * value.days,
      },
    })
      .then((result) => {
        setLoading(false);
        handleNavigate(
          `/vehicleType/detail/reservation/payment/${result.data.data.id}`
        );
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNavigate = (href) => router.push(href);

  return (
    <>
      <MainLayout>
        <section className="md:px-20 md:py-10 px-10 py-5">
          {loading ? <Loading /> : <div />}

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
                    {vehicleData?.name || "Vehicle"}
                  </h1>
                  <h2 className="text-xl mt-2">
                    {vehicleData?.location || "Location"}
                  </h2>
                  <p className="text-xl text-sangria-red mt-4">
                    {"No prepayment"}
                  </p>
                </div>

                <div className="flex items-center mt-4">
                  <IconButton
                    _hover={{ backgroundColor: "#FFCD61" }}
                    icon={<Icon w={6} h={6} as={FaMinus} />}
                    disabled={value.quantity <= 1 ? true : false}
                    onClick={() => handleValue("min")}
                  />
                  <h1 className="mx-10 text-3xl font-bold">{value.quantity}</h1>
                  <IconButton
                    backgroundColor="#FFCD61"
                    icon={<Icon w={6} h={6} as={FaPlus} />}
                    disabled={
                      value.quantity >= vehicleData.stock ? true : false
                    }
                    onClick={() => handleValue("plus")}
                  />
                </div>

                <div className="mt-4">
                  <h1 className="text-xl font-bold">Reservation Date :</h1>
                  <div className="bg-boro-silver mt-4 px-3 py-2 rounded">
                    <DatePicker
                      date={value.startDate}
                      onChange={(date) =>
                        setValue({ ...value, startDate: date })
                      }
                    />
                  </div>
                  <div className="mt-4">
                    <Selects
                      background="#DADADA"
                      data={days}
                      borderColor="#DADADA"
                      placeHolder="Days"
                      onChange={(e) =>
                        setValue({
                          ...value,
                          days: parseInt(e.target.value),
                        })
                      }
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
            onClick={() => addReservation()}
          />
        </section>
      </MainLayout>
    </>
  );
};

export default Reservation;
