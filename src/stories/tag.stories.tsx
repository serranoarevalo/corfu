import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { Tag } from "../Tag/tag";

const stories = storiesOf("Tag", module).addDecorator(withInfo());

stories.add("default", () => (
  <Tag
    text={text("Text", "Tag Text!")}
    edges={select("Edge Style", ["sharp", "rounded", "round-sharp"], "sharp")}
    bgColor={select(
      "Background Color",
      ["primary", "success", "error", "alert", "dark"],
      "primary"
    )}
  />
));
