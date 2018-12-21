import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { Modal } from "../Modal/modal";

const stories = storiesOf("Modal", module).addDecorator(withInfo());

stories.add("default", () => (
  <Modal
    title={text("Title", "Notification title 😬")}
    theme={select(
      "Theme",
      ["primary", "success", "error", "alert", "dark"],
      "primary"
    )}
    supportText={text("Support Text", "So this is what shows up as support")}
    cancelText={text("Cancel Text", "Cancel")}
    confirmText={text("Confirm Text", "Next Step")}
  />
));
