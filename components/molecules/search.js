import { InputGroup, Input, InputRightElement, Icon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Search = ({
  className,
  placeHolder,
  placeholdercolor,
  size,
  onChange,
  backgroundIcon,
  onFocus,
  onBlur,
}) => {
  return (
    <>
      <div
        className={`px-5 py-1.5 rounded-md border border-sand-silver ${className}`}
      >
        <InputGroup variant="unstyled">
          <Input
            size={size || "lg"}
            placeholder={placeHolder || "Your place holder"}
            _placeholder={{
              color: placeholdercolor || "#4A4C53",
              fontWeight: "medium",
            }}
            onChange={onChange}
            color="#4A4C53"
            className="mr-7"
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <InputRightElement className="mt-1 px-1" bg={backgroundIcon}>
            <Icon as={FaSearch} w={5} h={5} />
          </InputRightElement>
        </InputGroup>
      </div>
    </>
  );
};

export default Search;
