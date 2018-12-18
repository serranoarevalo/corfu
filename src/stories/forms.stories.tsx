import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { Input } from "../Input/input";

const stories = storiesOf("Form Fields", module).addDecorator(withInfo());

stories.add("input", () => (
  <Input
    label={text("Label", "Input Field")}
    multiline={boolean("Multiline", false)}
    hasSuccess={boolean("Success", false)}
    successMsg={text("Success Message", "")}
    hasError={boolean("Error", false)}
    errorMsg={text("Error Message", "")}
    hasWarning={boolean("Warning", false)}
    warningMsg={text("Warning Message", "")}
    placeholder={text("Placeholder", "Placeholder")}
    value={text("Value", "")}
    disabled={boolean("Disabled", false)}
    isMaterial={boolean("Material Design", false)}
    id="something"
  />
));
