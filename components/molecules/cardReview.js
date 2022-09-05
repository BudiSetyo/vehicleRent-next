import { Box, IconButton, Icon } from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight, FaPlus } from "react-icons/fa";

const CardReview = ({ data, leftAction, rightAction, plusAction }) => {
  return (
    <>
      <Box
        className="relative bg-cover bg-center w-72 h-96 rounded-xl"
        style={{
          backgroundImage: data?.image || "url('/background/first.png')",
        }}
      >
        <div className="absolute bottom-0 left-0">
          <IconButton
            variant="unstyled"
            icon={<Icon w={7} h={7} color="#FFCD61" as={FaPlus} />}
            onClick={plusAction}
          />
        </div>
        <div className="absolute rounded-tl-xl pt-5 pl-7 bottom-0 right-0 bg-white w-fit">
          <IconButton
            className="mr-2"
            variant="outline"
            isRound={true}
            icon={<Icon color="#D7D7D7" as={FaAngleLeft} w={4} h={4} />}
            onClick={leftAction}
          />

          <IconButton
            variant="outline"
            isRound={true}
            icon={<Icon color="#D7D7D7" as={FaAngleRight} w={4} h={4} />}
            onClick={rightAction}
          />
        </div>
      </Box>
    </>
  );
};

export default CardReview;
