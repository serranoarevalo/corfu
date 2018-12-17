import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { Button } from "../Button/button";

const stories = storiesOf("Button", module).addDecorator(
  withInfo({ inline: true })
);

stories.add("with text", () => (
  <Button
    content={text("Content", "hey!")}
    edges={select("Edge Style", ["sharp", "rounded", "round-sharp"], "sharp")}
    bgColor={select(
      "Background Color",
      ["primary", "success", "error", "alert", "dark"],
      "primary"
    )}
    inverted={boolean("Inverted", false)}
  />
));
