import { Input } from "@chakra-ui/react";

const Inputs = ({
  className,
  placeHolder,
  placeholdercolor,
  textColor,
  size,
  fontWeight,
  type,
  background,
  borderColor,
  onChange,
  onFocus,
  onBlur,
  value,
  name,
}) => {
  return (
    <>
      <Input
        bg={background || "rgba(255, 255, 255, 0.5)"}
        placeholder={placeHolder}
        _placeholder={{
          color: placeholdercolor || "#4A4C53",
          fontWeight: "medium",
        }}
        borderColor={borderColor || "#4A4C53"}
        textColor={textColor || "#4A4C53"}
        fontWeight={fontWeight || "s"}
        className={className}
        size={size}
        type={type}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        name={name}
      />
    </>
  );
};

export default Inputs;
