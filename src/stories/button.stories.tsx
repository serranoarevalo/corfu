import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { Button } from "../Button/button";
import { IconButton } from "../IconButton/iconButton";

const stories = storiesOf("Buttons", module).addDecorator(withInfo());

stories.add("with text", () => (
  <Button
    content={text("Content", "Button Text!")}
    edges={select("Edge Style", ["sharp", "rounded", "round-sharp"], "sharp")}
    primaryColor={select(
      "Background Color",
      ["primary", "success", "error", "alert", "dark"],
      "primary"
    )}
    inverted={boolean("Inverted", false)}
  />
));

stories.add("with icon", () => (
  <IconButton
    icon={<span style={{ fontSize: 22 }}>✌🏻</span>}
    edges={select("Edge Style", ["sharp", "rounded", "round-sharp"], "sharp")}
    primaryColor={select(
      "Background Color",
      ["primary", "success", "error", "alert", "dark"],
      "primary"
    )}
  />
));
