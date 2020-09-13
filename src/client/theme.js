import { theme } from "@chakra-ui/core";

const newTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    custom: {
      red: "#e63946",
      white: "#f1faee",
      lightBlue: "#a8dadc",
      blue1: "#457b9d",
      blue2: "#1d3557",
    },
  },
  fonts: {
    body: "Ubuntu,system-ui, sans-serif",
    heading: "Ubuntu,Georgia, serif",
    mono: "Menlo, monospace",
  },
};

export default newTheme;
