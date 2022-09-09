import { Box, Icon } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";

const TodayHistory = ({ title }) => {
  return (
    <>
      <Box
        as="button"
        className="w-full pt-2 pb-5 flex items-center justify-between border-b"
      >
        <h1 className="text-2xl">{title || "Your title"}</h1>
        <Icon color="#999" h={6} w={6} as={FaChevronRight} />
      </Box>
    </>
  );
};

export default TodayHistory;
