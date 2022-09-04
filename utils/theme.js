import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        field: {
          bg: "red.200",
        },
      },
    },
  },
});

export default Theme;
