import { Box, Icon } from "@chakra-ui/react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const RowHistory = ({ children, title }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <Box
        as="button"
        className={`w-full pt-2 pb-5 flex items-center justify-between ${
          showDetail ? "" : "border-b-2"
        }`}
        onClick={() => setShowDetail(!showDetail)}
      >
        <h1 className="text-2xl">{title || "Your title"}</h1>
        <Icon
          color="#999"
          h={6}
          w={6}
          as={showDetail ? FaChevronDown : FaChevronRight}
        />
      </Box>

      <div className={`${showDetail ? "" : "hidden"}`}>
        <div className="w-full bg-white border-b-4 rounded-b py-3 px-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default RowHistory;
