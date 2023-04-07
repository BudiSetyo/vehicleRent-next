import { InputGroup, Input, InputRightElement, Icon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "node_modules/axios/index";
const api = process.env.API_URL;

const AutoComplete = () => {
  const router = useRouter();

  const [suggestions, setSuggestions] = useState([]);
  const [option, setOption] = useState({
    showSuggestions: false,
  });

  const handleNavigate = (href) => router.push(href);

  const onChange = (e) => {
    setOption({ ...option, showSuggestions: true });

    fetchData(e.target.value);
  };

  const onKeyDown = (e) => {
    setOption({ ...option, showSuggestions: false });
    setSuggestions([]);
  };

  let suggestionsListComponent;

  if (option.showSuggestions) {
    if (suggestions.length) {
      suggestionsListComponent = (
        <ul
          className="w-full shadow-md mt-1 p-2 rounded absolute bg-white"
          style={{ zIndex: "9999" }}
        >
          {suggestions.map((suggestion) => {
            return (
              <li
                key={suggestion.id}
                onClick={() =>
                  handleNavigate(`vehicleType/detail/${suggestion.id}`)
                }
                className="py-1 font-semibold"
              >
                {suggestion.name}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div
          className="w-full shadow-md mt-1 p-2 rounded absolute"
          style={{ zIndex: "9999" }}
        >
          <em>Sorry vehicle not available.</em>
        </div>
      );
    }
  }

  const fetchData = (input) => {
    if (input !== "") {
      axios({
        method: "get",
        url: `${api}/vehicles/?search=${input}&page=1&row=5`,
      })
        .then((result) => {
          setSuggestions(result.data.data.results);
        })
        .catch((err) => console.log(err));
    }

    if (input === "") {
      setSuggestions([]);
      setOption({ ...option, showSuggestions: false });
    }

    return;
  };

  return (
    <>
      <InputGroup>
        <Input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="bg-white border-2 border-gray w-full"
          placeholder="Search vehicle (ex. cars, cars name)"
        />
        <InputRightElement className="mx-2">
          <Icon as={FaSearch} w={5} h={5} />
        </InputRightElement>
      </InputGroup>
      <div className="relative">{suggestionsListComponent}</div>
    </>
  );
};

export default AutoComplete;
