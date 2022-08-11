import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import React from "react";

export default function ExpandCard(props) {
  return (
    <div className="text-center">
      <p>
        <IconMailForward /> {props.email}
      </p>
      <p>
        <IconMapPins />
        {props.address}
      </p>
    </div>
  );
}
