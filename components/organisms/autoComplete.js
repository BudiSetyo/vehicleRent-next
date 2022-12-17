import { Search } from "@/components";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

const AutoComplete = ({ backgroundInput, data, placeHolder, size }) => {
  const router = useRouter();

  const [inputValue, setInputValue] = useState("");
  const [searchVisible, setSearchVisible] = useState(false);

  const handleNavigate = (href) => router.push(href);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSearchVisible(true);
  };

  const handleVisibleSearch = (value) => setSearchVisible(value);

  const filterData = (data, searchString) => {
    const newData = data.filter(
      (item) =>
        (item.vehicle || "")
          .toLowerCase()
          .indexOf((searchString || "").toLowerCase()) !== -1
    );

    return newData;
  };

  return (
    <section>
      <Search
        className={`bg-${backgroundInput || "sand-silver"} mb-4 border-2`}
        placeHolder={placeHolder || "Your placeholder"}
        placeHolderColor="#4A4C53"
        size={size || "lg"}
        onChange={handleChange}
        onBlur={() => handleVisibleSearch(false)}
      />

      <div className={`relative ${searchVisible ? "" : "hidden"}`}>
        <div className="h-52 w-full shadow-lg absolute bg-boro-silver p-4 rounded overflow-y-scroll scroll-smooth">
          {inputValue === "" ? (
            <>
              <div>
                <h1>No result found</h1>
              </div>
            </>
          ) : (
            <>
              <div>
                {filterData(data, inputValue).map((item, index) => {
                  return (
                    <div className="bg-white px-2 py-1 mb-1" key={index}>
                      <Box
                        clas
                        as="button"
                        onClick={() =>
                          handleNavigate(`/vehicleType/detail/${item.vehicle}`)
                        }
                      >
                        <p>{item.vehicle}</p>
                      </Box>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AutoComplete;
