import { InputGroup, Input, InputRightElement, Icon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import axios from "node_modules/axios/index";
const api = process.env.API_URL;

const AutoComplete = ({ suggestions }) => {
  const [option, setOption] = useState({
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: true,
    userInput: "",
  });

  const { activeSuggestion, filteredSuggestions, showSuggestions, userInput } =
    option;

  const onChange = (e) => {
    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput?.toLowerCase()) > -1
    );

    setOption({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
  };

  const onClick = (e) =>
    setOption({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });

  const onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = option;

    if (e.keyCode === 13) {
      setOption({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      });
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setOption({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setOption({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  let suggestionsListComponent;

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions w-full shadow mt-1 p-2 rounded">
          {filteredSuggestions.map((suggestion, index) => {
            let className;

            // Flag the active suggestion with a class
            if (index === activeSuggestion) {
              className = "suggestion-active";
            }
            return (
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div className="no-suggestions w-full shadow mt-1 p-2 rounded">
          <em>No suggestions available.</em>
        </div>
      );
    }
  }

  return (
    <>
      <InputGroup>
        <Input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={option.userInput}
          className="bg-white border-2 border-gray w-full"
        />
        <InputRightElement className="mx-2">
          <Icon as={FaSearch} w={5} h={5} />
        </InputRightElement>
      </InputGroup>
      {suggestionsListComponent}
    </>
  );
};

export default AutoComplete;
