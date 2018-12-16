import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { Button } from "../Button/button";

const stories = storiesOf("Button", module);

stories.add(
  "with text",
  withInfo({
    inline: true,
    text: "A simple button"
  })(() => <Button text={text("text", "hey!")} />)
);
