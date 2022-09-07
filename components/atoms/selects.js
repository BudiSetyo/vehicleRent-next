import { Select } from "@chakra-ui/react";

const Selects = ({ placeHolder, data, className, background }) => {
  return (
    <>
      <Select
        bg={background || "rgba(255, 255, 255, 0.5)"}
        placeholder={placeHolder}
        _placeholder={{ color: "#4A4C53", fontWeight: "medium" }}
        border="#4A4C53"
        textColor="#4A4C53"
        fontWeight="medium"
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
