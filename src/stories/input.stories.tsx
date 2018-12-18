import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { Input } from "../Input/input";

const stories = storiesOf("Input", module).addDecorator(withInfo());

stories.add("default", () => (
  <Input
    label={text("Label", "Input Filed")}
    multiline={boolean("Multiline", false)}
    isMaterial={boolean("Is Material", false)}
    placeholder={text("Placeholder", "Placeholder")}
    value={text("Value", "")}
    id="something"
  />
));
