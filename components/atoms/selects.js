import { Select } from "@chakra-ui/react";

const Selects = ({
  placeHolder,
  placeHolderColor,
  data,
  className,
  background,
  borderColor,
  onChange,
  size,
}) => {
  return (
    <>
      <Select
        bg={background || "rgba(255, 255, 255, 0.5)"}
        placeholder={placeHolder}
        color={placeHolderColor || "#4A4C53"}
        borderColor={borderColor || "#4A4C53"}
        fontWeight="medium"
        size={size}
        className={className}
        onChange={onChange}
      >
        {data.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </Select>
    </>
  );
};

export default Selects;
