import {
  MainLayout,
  Search,
  Selects,
  Cards,
  RowHistory,
  DetailHistory,
} from "@/components";
import { Wrap, Box, Icon } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { updateHistory } from "@/configs";
import { useEffect } from "react";
import axios from "axios";
const api = process.env.API_URL;

const History = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const historyData = useSelector((state) => state.history);
  const userData = useSelector((state) => state.user);

  // console.log(historyData);

  const data = ["bon"];

  const fetchData = () => {
    if (!userData.token) {
      return dispatch(updateHistory([]));
    }

    axios({
      method: "get",
      url: `${api}/reservations`,
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    })
      .then((result) => {
        if (historyData !== result.data.data) {
          return dispatch(updateHistory(result.data.data));
        }

        return;
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (reservationId) => {
    axios({
      method: "delete",
      url: `${api}/reservations/?reservationId=${reservationId}`,
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    })
      .then(() => {
        const newHistory = historyData.filter(
          (history) => history.id !== reservationId
        );

        return dispatch(updateHistory(newHistory));
      })
      .catch((err) => console.log(err));
  };

  const handleNavigate = (href) => router.push(href);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainLayout>
      <section className="flex lg:flex-row flex-col md:py-8 md:px-20 py-4 px-10">
        <div className="w-full md:mr-20">
          <div className="flex">
            <Search
              className="w-full mr-10 bg-boro-silver border-none"
              placeHolder="Search history"
              placeHolderColor="#767680"
              backgroundIcon="#DADADA"
            />
            <div className="w-32">
              <Selects
                className="w-full px-5"
                background="#DADADA"
                placeHolder="Filter"
                placeHolderColor="#767680"
                borderColor="#DADADA"
                data={data}
              />
            </div>
          </div>

          <div className="mt-12">
            <div>
              <div>
                <h1 className="text-2xl text-sand-silver">History</h1>
                <div className="mt-12">
                  {historyData?.map((history, index) => {
                    return (
                      <RowHistory
                        title={
                          history.payment.status === "order"
                            ? `Please finish your payment for ${history.vehicleReservation.name}`
                            : history.payment.status === "waiting"
                            ? `Please wait for the admin to confirm the order ${history.vehicleReservation.name}`
                            : `Your ${history.vehicleReservation.name} payment has been confirmed!`
                        }
                        key={index}
                      >
                        <DetailHistory
                          name={history.vehicleReservation.name}
                          date={history.startDate}
                          prePayment={"No Prepayment"}
                          status={history.payment.isCompleted}
                          image={history.vehicleReservation.picture}
                          statusName={
                            history.payment.isCompleted
                              ? "Confirmed"
                              : "Finish Your Payment"
                          }
                          handleDetail={() =>
                            handleNavigate(
                              `/vehicleType/detail/reservation/payment/${history.id}`
                            )
                          }
                          handleDelete={() => handleDelete(history.id)}
                        />
                      </RowHistory>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 lg:mt-0 mt-20 md:flex flex-col items-center w-full lg:max-w-xs border rounded-lg">
          <h1 className="text-xl text-center text-onyx-black font-bold mb-10">
            New Arrival
          </h1>
          <Wrap justify="center" spacing="30px">
            <Cards />
            <Cards />
          </Wrap>

          <div className="flex justify-center">
            <Box className="mt-10" as="button">
              <p className="text-quick-silver">View more</p>
              <Icon as={FaChevronDown} w={10} h={10} />
            </Box>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default History;
