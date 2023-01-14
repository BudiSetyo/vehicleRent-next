import { Buttons } from "@/components";
import moment from "moment";

const DetailHistory = ({
  image,
  name,
  date,
  prePayment,
  status,
  statusName,
  handleDelete,
  handleDetail,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row mb-10">
        <div
          className="w-60 h-52 bg-sand-silver bg-cover bg-center rounded-xl"
          style={{
            backgroundImage: `URL(${image || "/background/fourth.png"})`,
          }}
        />

        <div className="md:ml-20 md:mt-0 mt-10">
          <div>
            <h2 className="text-lg font-bold">{name || "Vehicle"}</h2>
            <p className="text-lg">
              Date : {moment(date).format("DD-MM-YYYY") || "Date"}
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-lg font-bold">
              Prepayment : {prePayment || "Your payment"}
            </h2>
            <p
              className={`text-lg ${
                status ? "text-ao-green" : "text-sangria-red"
              }`}
            >
              {statusName || "Your status"}
            </p>
          </div>

          {status ? (
            <Buttons
              className="mt-4 px-10 py-2"
              text="Delete"
              textEdit="font-bold"
              onClick={() => handleDelete}
            />
          ) : (
            <Buttons
              className="mt-4 px-10 py-2"
              text="Detail"
              textEdit="font-bold"
              onClick={() => handleDetail}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default DetailHistory;
