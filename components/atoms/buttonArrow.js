import { Box, Icon } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";

const ButtonArrow = ({ text, textColor, onClick, className }) => {
  return (
    <>
      <Box
        className={`flex items-center ${className}`}
        as="button"
        onClick={onClick}
      >
        <p className={`text-base ${textColor || "text-crayola-orange"} mr-4`}>
          {text}
        </p>
        <Icon color="#FFCD61" as={FaAngleRight} />
      </Box>
    </>
  );
};

export default ButtonArrow;
