import { create } from "@storybook/theming";

export default create({
  base: "light",
  fontBase: '"Inter", sans-serif',
  brandTitle: "Agile Actors x City JS Workshop",
  brandUrl: "https://www.agileactors.com",
  brandTarget: "_blank",
  brandImage: require("../public/images/AA-logo.svg"),
});
