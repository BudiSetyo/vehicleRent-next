import { Input } from "@chakra-ui/react";

const Inputs = ({
  className,
  placeHolder,
  placeHolderColor,
  textColor,
  size,
  fontWeight,
  type,
}) => {
  return (
    <>
      <Input
        bg="rgba(255, 255, 255, 0.5)"
        placeholder={placeHolder}
        _placeholder={{
          color: placeHolderColor || "#4A4C53",
          fontWeight: "bold",
        }}
        border="none"
        textColor={textColor || "#4A4C53"}
        fontWeight={fontWeight || "s"}
        className={className}
        size={size}
        type={type}
      />
    </>
  );
};

export default Inputs;
