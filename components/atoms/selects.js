import { Select } from "@chakra-ui/react";

const Selects = ({ placeHolder, data, className }) => {
  return (
    <>
      <Select
        bg="rgba(255, 255, 255, 0.5)"
        placeholder={placeHolder}
        _placeholder={{ color: "#4A4C53", fontWeight: "bold" }}
        border="none"
        textColor="#4A4C53"
        fontWeight="bold"
        className={className}
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
