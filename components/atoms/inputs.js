import { Input } from "@chakra-ui/react";

const Inputs = ({ className, placeHolder }) => {
  return (
    <>
      <Input
        bg="rgba(255, 255, 255, 0.5)"
        placeholder={placeHolder}
        _placeholder={{ color: "#4A4C53", fontWeight: "bold" }}
        border="none"
        textColor="#4A4C53"
        fontWeight="bold"
        className={className}
      />
    </>
  );
};

export default Inputs;
