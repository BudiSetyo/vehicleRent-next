import { Buttons } from "@/components";

const WeekHistory = ({ image, name, date, payment, status }) => {
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
            <p className="text-lg">{date || "Date"}</p>
          </div>

          <div className="mt-5">
            <h2 className="text-lg font-bold">
              Prepayment : {payment || "Your payment"}
            </h2>
            <p className="text-lg text-ao-green">{status || "Your status"}</p>
          </div>

          <Buttons
            className="mt-4 px-10 py-2"
            text="Delete"
            textEdit="font-bold"
          />
        </div>
      </div>
    </>
  );
};

export default WeekHistory;
