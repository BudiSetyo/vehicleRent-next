import { Box } from "@chakra-ui/react";

const Cards = ({ data, name, location, image, onClick }) => {
  return (
    <>
      <Box
        className="relative w-64 h-80 rounded-md bg-cover bg-center cursor-pointer"
        style={{
          backgroundImage: image
            ? `url(${image})`
            : "url('/background/second.png')",
        }}
        onClick={onClick}
      >
        <div className="absolute rounded-tr-md w-28 pt-1 px-6 bottom-0 bg-white">
          <h1 className="text-base font-bold text-onyx-black">
            {data?.vehicle || name || "vehicle"}
          </h1>
          <h2 className="text-sm text-old-silver">
            {data?.location || location || "location"}
          </h2>
        </div>
      </Box>
    </>
  );
};

export default Cards;
