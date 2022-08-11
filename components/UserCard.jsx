import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import { useState } from "react";
import React from "react";
import ExpandCard from "../components/ExpandCard";

export default function UserCard(props) {
  const [mouseClick, setMouseClick] = useState(false);
  return (
    <div className="border-bottom">
      {/* main section */}
      <div
        className="d-flex align-items-center p-3"
        onClick={() => {
          mouseClick ? setMouseClick(false) : setMouseClick(true);
        }}
      >
        <img src={props.imgUrl} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        {mouseClick ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      {mouseClick ? <ExpandCard key={props.name} {...props} /> : ""}

      {/* UserCardDetail is hidden */}
    </div>
  );
}
