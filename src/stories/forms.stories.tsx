import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { Input } from "../Input/input";
import { Checkbox } from "../Checkbox/checkbox";
import { Radio } from "../Radio/radio";
import { Switch } from "../Switch/switch";

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

stories.add("checkbox", () => (
  <Checkbox
    id="check"
    label={text("Label", "Checkbox label")}
    name="check"
    checked={boolean("Checked", false)}
    disabled={boolean("Disabled", false)}
  />
));

stories.add("radio", () => (
  <Radio
    id="radio"
    label={text("Label", "Radio label")}
    name="radio"
    checked={boolean("Checked", false)}
    disabled={boolean("Disabled", false)}
  />
));

stories.add("switch", () => <Switch on={boolean("On", true)} />);
