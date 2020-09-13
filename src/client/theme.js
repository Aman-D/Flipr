import { theme } from "@chakra-ui/core";

const newTheme = {
  ...theme,
  fonts: {
    body: "Ubuntu,system-ui, sans-serif",
    heading: "Ubuntu,Georgia, serif",
    mono: "Menlo, monospace",
  },
};

export default newTheme;
